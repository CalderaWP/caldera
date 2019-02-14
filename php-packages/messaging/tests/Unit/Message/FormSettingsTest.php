<?php

namespace calderawp\caldera\Messaging\Tests\Unit\Message;

use calderawp\caldera\Messaging\Message\FormSettings;
use PHPUnit\Framework\TestCase;

class FormSettingsTest extends TestCase
{

	public function testGetLayout()
	{
		$formSettings = new FormSettings();
		$formSettings->layout = 1;
		$this->assertEquals(1, $formSettings->getLayout());
	}

	public function testGetPdfLayout()
	{
		$formSettings = new FormSettings();
		$formSettings->pdfLayout = 1;
		$this->assertEquals(1, $formSettings->getPdfLayout());

	}

	public function testShouldAttatchPdf()
	{
		$formSettings = new FormSettings();
		$this->assertFalse($formSettings->shouldAttatchPdf());
		$formSettings->pdf = true;
		$this->assertTrue($formSettings->shouldAttatchPdf());
	}
}
