<?php

namespace calderawp\caldera\Messaging\Tests\Unit\Message;

use calderawp\caldera\Messaging\Message\FormSettings;
use calderawp\caldera\Messaging\Message\MessageFactory;
use calderawp\caldera\Messaging\Models\Message;
use calderawp\caldera\Messaging\Tests\Unit\UnitTestCase;

class MessageFactoryTest extends UnitTestCase
{

	public function testFromCfMainMailer()
	{

		$formSettings = \Mockery::mock(FormSettings::class);
		$pdfLayout = 7;
		$layout = 1;
		$formSettings->shouldReceive('getPdfLayout')->andReturn($pdfLayout);
		$formSettings->shouldReceive('getLayout')->andReturn($layout);
		$formSettings->shouldReceive('shouldAttatchPdf')->andReturn(true);
		$factory = new MessageFactory();
		$to = 'to@email.com';
		$content = 'sfdkl;fds fsadd Hi sandwich';
		$subject = 'The subject';
		$attachments = ['//path/1', 'path/1/2'];
		$cc = 'cc@email.com';
		$bcc = 'bcc@eamil.com';
		$data = [
			'from' => 'reply@email,com',
			'recipients' => $to,
			'message' => $content,
			'subject' => $subject,
			'attachments' => $attachments,
			'cc' => $cc,
			'bcc' => $bcc,
		];
		$message = $factory->fromCfMainMailer(7, $data, $formSettings);
		$this->assertSame($to, $message->getTo()->toArray()[ 0 ][ 'email' ]);
		$this->assertSame($subject, $message->getSubject());
		$this->assertSame($attachments, $message->getAttachments());
		$this->assertSame($cc, $message->getCc()->toArray()[ 0 ][ 'email' ]);
		$this->assertSame($bcc, $message->getBcc()->toArray()[ 0 ][ 'email' ]);

	}

	public function testFromCfMainMailerArrays()
	{

		$formSettings = \Mockery::mock(FormSettings::class);
		$pdfLayout = 0;
		$layout = 1;
		$formSettings->shouldReceive('getPdfLayout')->andReturn($pdfLayout);
		$formSettings->shouldReceive('getLayout')->andReturn($layout);
		$formSettings->shouldReceive('shouldAttatchPdf')->andReturn(false);
		$factory = new MessageFactory();
		$to = ['to@email.com'];
		$content = 'sfdkl;fds fsadd Hi sandwich';
		$subject = 'The subject';
		$attachments = ['//path/1', 'path/1/2'];
		$cc = ['cc1@email.com', 'cc@email.com'];
		$bcc = ['bcc1@email.com', 'bcc@email.com'];
		$data = [
			'from' => 'reply@email,com',
			'recipients' => $to,
			'message' => $content,
			'subject' => $subject,
			'attachments' => $attachments,
			'cc' => $cc,
			'bcc' => $bcc,
		];
		$message = $factory->fromCfMainMailer(7, $data, $formSettings);
		$this->assertSame([
			'email' => 'to@email.com',
			'name' => '',
		], $message->getTo()->toArray()[ 0 ]);
		$this->assertSame($subject, $message->getSubject());
		$this->assertSame($attachments, $message->getAttachments());
		$this->assertSame([
			[
				'email' => 'cc1@email.com',
				'name' => '',
			],
			[
				'email' => 'cc@email.com',
				'name' => '',
			],
		],$message->getCc()->toArray());



		$this->assertSame([
			[
				'email' => 'bcc1@email.com',
				'name' => '',
			],
			[
				'email' => 'bcc@email.com',
				'name' => '',
			],
		],$message->getBcc()->toArray());

	}
}
