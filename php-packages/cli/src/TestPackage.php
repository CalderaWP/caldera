<?php


namespace calderawp\caldera\Cli;

use Composer\Script\Event;
use Symfony\Component\Console\Input\ArrayInput;

class TestPackage extends PackageTesting
{

	public static function callback(Event $event)
	{
		static::setPackagesDir($event);

		$args = $event->getArguments();
		$packageToTest = is_array($args) && ! empty($args) && isset($args[0]) ? $args[0] : static::getPackages()[0];
		static::testPackage($packageToTest);
	}

	/**
	 * @param $package
	 *
	 * @return ArrayInput
	 */
	protected static function commandInput($package): ArrayInput
	{
		$input = new ArrayInput(['command' => "cd $package && composer test"]);
		return $input;
	}

	public static function testPackage($package)
	{
		$dir = static::getPackagesDir() . '/' . $package;
		var_dump($dir);
		var_dump(exec("cd $dir && composer fixes && composer test"));
	}
}
