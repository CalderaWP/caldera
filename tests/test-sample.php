<?php
/**
 * Class SampleTest
 *
 * @package Example
 */

/**
 * Sample test case.
 */
class SampleTest extends WP_UnitTestCase {

	/**
	 * A single example test.
	 */
	public function test_sample() {
		// Replace this with some actual testing code.
		$this->assertTrue( is_object(new \calderawp\CalderaContainers\Service\Container() ));
		$this->assertTrue( is_object(new \calderawp\caldera\restApi\CalderaRestApi(\caldera(),\caldera()->getServiceContainer()) ));
	}

	public function testCanInsertPost()
	{
		$this->assertFalse(is_object(wp_insert_post(['post_content' => 'title'])));
	}

	public function testCanUpdateOptions()
	{

		update_option('name', 'foot' );
		$this->assertSame('foot', get_option('name','not-foot' ));
	}
}
