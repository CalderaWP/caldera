

## Setup

### Add bootstrap


```xml
<!-- phpunit.xml.dist -->
<?xml version="1.0" encoding="UTF-8"?>
    <phpunit
        bootstrap="tests/bootstrap.php"
    >
<!-- ... -->
</phpunit>
```

See:
* https://symfony.com/doc/current/testing/bootstrap.html


### Seperate Unit and Integration Tests
When seperating tests into unit and integration, defined the test suites in the xml config file:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<phpunit
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="http://schema.phpunit.de/7.0/phpunit.xsd"
    colors="true">
    <testsuites>
        <testsuite name="Unit">
            <directory>./tests/Unit</directory>
        </testsuite>
        <testsuite name="Integration">
            <directory>./tests/Integration</directory>
        </testsuite>
    </testsuites>

    <filter>
        <whitelist>
            <directory suffix=".php">./src</directory>
            <exclude>
                <directory>./tests</directory>
                <directory>./vendor</directory>
            </exclude>
        </whitelist>
    </filter>
</phpunit>
```

* Run the unit tests:
    - `phpunit --testsuite=Unit`
* Run the Integration tests:
    - `phpunit --testsuite=Integration`
    
* composer scripts :
```json
{
//...
"scripts": {
    "test": "composer test:unit",
    "tests": "composer test:unit && && composer test:integration && composer test:acceptance",
    "test:unit": "phpunit --testsuite=Unit",
    "test:integration": "phpunit --testsuite=Integration",
    "test:acceptance": "phpunit --testsuite=Acceptance"
  }
}
```
## Mock Class

For these examples, assume we are testing the class `Greeter` which has a dependency that muse impliment `HiRoyContract`. The unit tests must test `Greeter` independent of all dependencies, so we will mock `HiRoyContract` using Mockery.

```php
interface HiRoyContract {
	public function sayHi(): string;
}

class Greeter {
	/**
	 * @var HiRoyContract
	 */
	protected $hiRoy;
	public function __construct(HiRoyContract $hiRoy )
	{
		$this->hiRoy = $hiRoy;
	}
	/**
	 * @return string
	 */
	public function sayHiToRoy() : string
	{
		return $this->hiRoy->sayHi();
	}
}
```

See: 
* https://torquemag.io/2018/08/advanced-oop-for-wordpress-part-9-extensible-plugins-using-the-plugins-api/
* http://docs.mockery.io/en/latest/reference/creating_test_doubles.html#classes-abstracts-interfaces
### Mock Class That Implements An Interface

```php
class SomethingTest extends \Mockery\Adapter\Phpunit\MockeryTestCase
{

	public function testSetHiToRoy()
	{
		//Create mock that implements interface
		$hiRoy = \Mockery::mock(HiRoyContact::class );

		//Inject mock dependency to Greeter
		$greeter = new Greeter($hiRoy);

		//Make sure property is set
		$this->assertAttributeEquals($hiRoy,'hiRoy', $greeter );
	}

	public function testSayHiToRoy()
	{

		//Method return we are testing for
		$expected = 'Hi Roy';
		//Create mock that implements interface
		$hiRoy = \Mockery::mock(HiRoyContact::class );

		$hiRoy
			//Add method of depenency unit being tested interacts with
			//If method isn't called, test fails.
			//That's what this unit test is concerned with.
			->shouldReceive( 'sayHi' )
			//Make method return a string
			//Necessary to prevent error - method must return a string
			->andReturn( $expected );

		//Inject mock dependency to Greeter
		$greeter = new Greeter($hiRoy);

		//Call method being tested and compare result
		$this->assertSame($expected,$greeter->sayHiToRoy() );
	}
}
``` 

## Expect Expectation

