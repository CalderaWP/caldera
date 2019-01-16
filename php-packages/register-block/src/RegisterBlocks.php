<?php


namespace calderawp\caldera\RegisterBlock;

use calderawp\caldera\RegisterBlock\Contracts\RegisterBlocksContract;
class RegisterBlocks implements RegisterBlocksContract
{

	/** @var string */
	protected $namespace;

	/**
	 * Collection of blocks being tracked
	 *
	 * @var array
	 */
	protected $blocks;


	protected $printedBlocks;

	public function __construct(string $namespace)
	{
		$this->namespace = $namespace;
	}

	/**
	 * Add a block to collection by registering it
	 *
	 * @param $name
	 * @param array $args
	 *
	 * @return bool
	 */
	public function registerBlock( $name, array $args = [] ) : bool
	{
		$this->blocks[] = $this->blockFullName($name);
		$registered  = \register_block_type($this->blockFullName($name), $args );
		return false !== $registered;
	}

	/**
	 * When block is rendered, possibly inline CSS
	 *
	 * @param string $blockContent Content of block
	 * @param array $block Block type
	 *
	 * @return string
	 */
	public function whenPrintBlocks( $blockContent, $block)
	{

		if ( ! empty( $block['style'])  ) {
			ob_start();
			\wp_print_styles( $block['style'] );
			$blockContent = ob_get_clean() . $blockContent;
		}

		return $blockContent;
	}

	/**
	 * @param $name
	 *
	 * @return string
	 */
	protected function blockFullName($name): string
	{
		return $this->namespace . '/' . $name;
	}

}
