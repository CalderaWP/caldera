<?php


use calderawp\caldera\Messaging\Models\Message;
use calderawp\caldera\Messaging\Entities\Recipient;
use calderawp\caldera\Messaging\Entities\Recipients;


class MessageTest extends \calderawp\caldera\Http\Tests\Unit\UnitTestCase
{

	public function testSetTo()
	{
		$message = new Message();
		$recipients= Mockery::mock(Recipients::class );
		$message->setTo($recipients);
		$this->assertAttributeEquals($recipients, 'to', $message );

	}

	public function testGetReply()
	{
		$message = new Message();
		$recipient= Mockery::mock(Recipient::class );
		$message->setReply($recipient);
		$this->assertAttributeEquals($recipient, 'reply', $message );
	}

	public function testSetContent()
	{
		$message = new Message();
		$message->setContent( 'c' );
		$this->assertAttributeEquals( 'c', 'content', $message);
	}

	public function testSetAccount()
	{
		$message = new Message();
		$message->setAccount( 2 );
		$this->assertAttributeEquals( 2, 'account', $message);

	}

	public function testSetPdfLayout()
	{
		$message = new Message();
		$message->setAccount( 2 );
		$this->assertAttributeEquals( 2, 'account', $message);

	}

	public function testGetSubject()
	{
		$message = new Message();
		$message->setSubject( 'Sibject 2' );
		$this->assertAttributeEquals( 'Sibject 2', 'subject', $message);

	}

	public function testSetLayout()
	{
		$message = new Message();
		$message->setLayout( 2 );
		$this->assertAttributeEquals( 2, 'layout', $message);
	}

	public function testGetCreatedAt()
	{
		$message = new Message();
		$date = new DateTime();
		$message->setCreatedAt( $date );
		$this->assertAttributeEquals( $date, 'createdAt', $message);
	}

	public function testSetAttachments()
	{
		$message = new Message();
		$a = [];
		$message->setAttachments($a);
		$this->assertSame($a, $message->getAttachments());
	}

	public function testGetPdf()
	{
		$message = new Message();
		$this->assertFalse($message->getPdf() );
		$message->setPdf(false );
		$this->assertFalse($message->getPdf() );
		$message->setPdf(true);
		$this->assertTrue( $message->getPdf());
	}

	public function testSetUpdatedAt()
	{
		$message = new Message();
		$date = new DateTime();
		$message->setUpdatedAt( $date );
		$this->assertAttributeEquals( $date, 'updatedAt', $message);
	}

	public function testSetReply()
	{
		$message = new Message();
		$recipient= Mockery::mock(Recipient::class );
		$message->setReply($recipient);
		$this->assertAttributeEquals($recipient, 'reply', $message );
	}

	public function testGetEntryData()
	{
		$message = new Message();
$data = [];
		$message->setEntryData($data);
		$this->assertEquals($data, $message->getEntryData());
	}

	public function testSetEntryData()
	{
		$message = new Message();

		$message->setEntryData([]);
		$this->assertAttributeEquals([], 'entryData', $message );
	}

	public function testGetAttachments()
	{
		$message = new Message();
		$data = [];
		$message->setAttachments($data);
		$this->assertEquals($data, $message->getAttachments());
	}

	public function testSetId()
	{
		$message = new Message();
		$id = 7;
		$message->setId($id);
		$this->assertEquals($id, $message->getId());
	}

	public function testSetSubject()
	{
		$message = new Message();
		$subject = 'aaa ';
		$this->assertEquals('', $message->getSubject());
		$message->setSubject($subject);
		$this->assertEquals($subject, $message->getSubject());
	}

	public function testIsSpammed()
	{
		$message = new Message();
		$this->assertFalse( $message->isSpammed() );
		$message->setSpammed(true);
		$this->assertTrue( $message->isSpammed() );
	}

	public function testGetTo()
	{
		$message = new Message();
		$recipients= Mockery::mock(Recipients::class );
		$message->setTo($recipients);
		$this->assertSame($recipients,$message->getTo());
	}

	public function testGetUpdatedAt()
	{

		$message = new Message();
		$date = new DateTime();
		$message->setUpdatedAt( $date );
		$this->assertSame($date,$message->getUpdatedAt());
	}

	public function testSetSpammed()
	{
		$message = new Message();
		$message->setSpammed(true);
		$this->assertAttributeEquals(true, 'spammed', $message );
	}

	public function testGetLayout()
	{
		$message = new Message();
		$message->setLayout(7);
		$this->assertSame(7, $message->getLayout());
	}

	public function testSetCreatedAt()
	{
		$message = new Message();
		$createdAt = new DateTime();
		$message->setCreatedAt($createdAt);
		$this->assertAttributeEquals( $createdAt, 'createdAt', $message );
	}

	public function testGetAccount()
	{
		$message = new Message();
		$message->setAccount(7);
		$this->assertSame(7, $message->getAccount());
	}

	public function testGetId()
	{
		$message = new Message();
		$message->setId(7);
		$this->assertSame(7, $message->getId());
	}

	public function testSetBcc()
	{
		$message = new Message();
		$recipients= Mockery::mock(Recipients::class );
		$message->setBcc($recipients);
		$this->assertAttributeEquals($recipients, 'bcc', $message );
	}
	public function testSetCc()
	{
		$message = new Message();
		$recipients= Mockery::mock(Recipients::class );
		$message->setCc($recipients);
		$this->assertAttributeEquals($recipients, 'cc', $message );
	}

	public function testGetPdfLayout()
	{
		$message = new Message();
		$message->setPdfLayout(7);
		$this->assertSame(7, $message->getPdfLayout());
	}

	public function testGetContent()
	{
		$message = new Message();
		$message->setContent('<p>1</p>');
		$this->assertSame('<p>1</p>', $message->getContent());
	}

	public function testSetPdf()
	{
		$message = new Message();
		$message->setPdf(1);
		$this->assertAttributeEquals(1, 'pdf', $message );
	}
}
