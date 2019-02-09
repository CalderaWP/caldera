<?php


namespace calderawp\caldera\Messaging\Message;


trait Magic
{
	/**
	 * Prepare a magic tag that uses brackets
	 *
	 * @param string $value
	 *
	 * @return array
	 */
	private function explodeBracketMagic(string $value)
	{
		preg_match_all("/\{(.+?)\}/", $value, $matches);
		return $matches;
	}

	/**
	 * Prepare a magic tag that uses % %
	 *
	 * @param string $value
	 *
	 * @return array
	 */
	public function explodeFieldMagic(string $value)
	{
		$regex = "/%([a-zA-Z0-9_:]*)%/";

		preg_match_all($regex, $value, $matches);
		return $matches;
	}

	/**
	 * Split tags by colon
	 *
	 * @param string $fieldMagic
	 *
	 * @return array
	 */
	private static function splitTags(string $fieldMagic)
	{
		$part_tags = explode(':', $fieldMagic);

		return $part_tags;
	}

}
