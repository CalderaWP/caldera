<?php


namespace calderawp\caldera\Cli;

use Composer\Script\Event;
use Symfony\Component\Console\Input\ArrayInput;

class TestPackages extends PackageTesting
{



	public static function callback(Event $event)
	{
		static::setPackagesDir($event);
		$args = $event->getArguments();
		$packagesToTest = is_array($args) && ! empty($args) ? $args : static::getPackages();
		foreach ($packagesToTest as $package) {
			 static::testPackage($package);
		}
	}


	public static function testPackage($package)
	{
		if (static::isPackage($package)) {
			var_dump(exec("composer test:package $package"));
		} else {
			throw new \Exception('Invalid Package ' . $package);
		}
	}

	/**
	 * @param $package
	 *
	 * @return ArrayInput
	 */
	protected static function commandInput($package): ArrayInput
	{
		$input = new ArrayInput(['command' => "test:package $package"]);
		return $input;
	}
}
