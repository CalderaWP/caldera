<?php


namespace calderawp\caldera\WordPressPlugin;

use calderawp\caldera\DataSource\WordPressData\PostTypeFactory;
use calderawp\caldera\DataSource\WordPressData\PostTypeWithCustomMetaTable;
use calderawp\caldera\Messaging\CalderaCalderaMessaging;
use calderawp\caldera\Messaging\Message\Attributes;
use calderawp\caldera\Messaging\Models\Rest\MessageController;
use calderawp\caldera\WordPressPlugin\Contracts\CalderaWordPressPluginContract;
use calderawp\CalderaContainers\Service\Container;
use calderawp\DB\Factory;
use calderawp\DB\Contracts\FactoryContract;
use calderawp\DB\Tables;
use calderawp\interop\Attribute;
use calderawp\interop\Contracts\CalderaModule;
use calderawp\CalderaContainers\Service\Container as ServiceContainer;
use calderawp\interop\Module;
use calderawp\caldera\restApi\Contracts\CalderaRestApiContract;
use calderawp\caldera\Messaging\Contracts\CalderaMessagingContract;
use calderawp\caldera\DataSource\WordPressData\Contracts\PostTypeFactoryContract;
use calderawp\caldera\DataSource\Contracts\SourceContract as Source;
use WpDbTools\Type\TableSchema;
use calderawp\caldera\Messaging\Contracts\MessageControllerContract;

class CalderaWordPressPlugin extends Module implements CalderaWordPressPluginContract
{

	/** @var PostTypeFactory */
	protected $postTypeFactory;

	/** @var \wpdb */
	protected $wpdb;
	/**
	 * @var string
	 */
	const IDENTIFIER = 'calderaWordPressPlugin';

	/** @inheritdoc */
	public function getIdentifier(): string
	{
		return self::IDENTIFIER;
	}

	/** @inheritdoc */
	public function registerServices(ServiceContainer $container): CalderaModule
	{
		$this->getServiceContainer()->singleton(FactoryContract::class, function () {
			new Factory();
		});
		return $this;
	}

	/**
	 * @return \wpdb
	 */
	public function getWpdb(): \wpdb
	{
		return $this->wpdb ? $this->wpdb : $this->serviceContainer->make('\wpdb');
	}

	/**
	 * @param \wpdb $wpdb
	 *
	 * @return CalderaWordPressPluginContract
	 */
	public function setWpdb(\wpdb $wpdb): CalderaWordPressPluginContract
	{
		$this->wpdb = $wpdb;
		return $this;
	}


	/**
	 * @return  CalderaRestApiContract
	 */
	public function getRestApiModule(): CalderaRestApiContract
	{
		return $this
			->getCore()
			->getRestApi();
	}

	public function getMessagingModule(): CalderaMessagingContract
	{
		try {
			$this->getCore()->getModule(CalderaCalderaMessaging::IDENTIFIER);
		} catch (\Exception $e) {
			$container = $this->getServiceContainer();
			$container->bind(MessageControllerContract::class, function(){
				return new MessageController($this->getMessageDataSource(), function (){
					return true;
				});
			});
			$this->core->addModule(new CalderaCalderaMessaging($this->getCore(),$container ));


		}
		$module = $this->getCore()->getModule(CalderaCalderaMessaging::IDENTIFIER);

		return $module;
	}


	/**
	 * Get data source -- a MySQL table - for messages
	 *
	 * @return PostTypeWithCustomMetaTable
	 * @throws \calderawp\caldera\DataSource\Exception
	 */
	public function getMessageDataSource(): PostTypeWithCustomMetaTable
	{
		/** @var PostTypeFactoryContract $postTypeFactory */
		$postTypeFactory = $this->getPostTypeFactory();
		return $postTypeFactory->postTypeWithMeta('cfp_message', [
			'label' => 'message',
			'labels' => [
				'name' => 'Message',
			],
			'show_in_menu' => true,
			'supports' => ['custom-fields', 'editor','title'],
		], new Attributes(), 'id');

	}

	/**
	 * Get the post type factory
	 *
	 * @return PostTypeFactoryContract
	 */
	public function getPostTypeFactory(): PostTypeFactoryContract
	{
		if (!$this->postTypeFactory) {
			$this->postTypeFactory = new PostTypeFactory(
				function (string $name, array $args) {
					if (function_exists('register_post_type')) {
						register_post_type($name, $args);
					}
				},
				function (string $postTypeName, Attribute $attribute) {
					if (function_exists('register_post_meta')) {
						register_post_meta($postTypeName, $attribute->getName(), [
							'single' => 'array' === $attribute->getDataType() ? false : true,
							'sanitize_callback' => $attribute->getSanitizeCallback(),
							'show_in_rest' => true,
							'description' => $attribute->getDescription(),
							'type' => $attribute->getDataType(),
						]);
					}
				},
				$this->getServiceContainer()->make(Factory::class),
				$this->getWpdb()
			);
		}
		return $this->postTypeFactory;
	}

	public function getMessageTableSchema(): TableSchema
	{
		return $this->getMessageDataSource()->getMetaTable()->getSchema();
	}
}
