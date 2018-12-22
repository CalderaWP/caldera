<?php


namespace calderawp\caldera\Cli;

use Composer\Console\Application;
use Composer\Script\Event;
use Symfony\Component\Console\Input\ArrayInput;

abstract class PackageTesting
{
	protected static $packages;
	protected static $packagesDir;

	public static function setPackagesDir(Event $event)
	{
		static::$packagesDir = dirname($event
				->getComposer()
				->getConfig()
				->get('vendor-dir')) . '/php-packages';
	}

	public static function getPackagesDir(): string
	{
		return static::$packagesDir;
	}

	public static function getPackages()
	{
		$dir = new \DirectoryIterator(static::getPackagesDir());
		$packages = [];
		foreach ($dir as $fileinfo) {
			if ($fileinfo->isDir() && !$fileinfo->isDot()) {
				$packages[] = $fileinfo->getFilename();
			}
		}

		return $packages;
	}


	public static function isPackage(string $name)
	{
		return in_array($name, static::getPackages());
	}

	/**
	 * @param $package
	 *
	 * @return ArrayInput
	 */
	abstract protected static function commandInput($package): ArrayInput;

	abstract public static function callback(Event $event);

	abstract public static function testPackage($package);
}
