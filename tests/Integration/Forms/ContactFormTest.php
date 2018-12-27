<?php


namespace calderawp\caldera\Tests\Integration\Forms;

use calderawp\caldera\Forms\Forms\ContactForm;

class ContactFormTest extends SnapshotTestCase
{


	public function testContactFormToArray(){
		$contactForm = new ContactForm();
		$this->assertMatchesJsonSnapshot(json_encode($contactForm));

	}
}
