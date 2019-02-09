<?php


use calderawp\caldera\Messaging\Models\Message;
use calderawp\caldera\Messaging\Entities\Recipient;
use calderawp\caldera\Messaging\Entities\Recipients;


class MessageTest extends \calderawp\caldera\Http\Tests\Unit\UnitTestCase
{

	public function testSetTo()
	{
		$message = new Message();
		$recipients = Mockery::mock(Recipients::class);
		$message->setTo($recipients);
		$this->assertAttributeEquals($recipients, 'to', $message);

	}

	public function testGetReply()
	{
		$message = new Message();
		$recipient = Mockery::mock(Recipient::class);
		$message->setReply($recipient);
		$this->assertAttributeEquals($recipient, 'reply', $message);
	}

	public function testSetContent()
	{
		$message = new Message();
		$message->setContent('c');
		$this->assertAttributeEquals('c', 'content', $message);
	}

	public function testSetAccount()
	{
		$message = new Message();
		$message->setAccount(2);
		$this->assertAttributeEquals(2, 'account', $message);

	}

	public function testSetPdfLayout()
	{
		$message = new Message();
		$message->setAccount(2);
		$this->assertAttributeEquals(2, 'account', $message);

	}

	public function testGetSubject()
	{
		$message = new Message();
		$message->setSubject('Sibject 2');
		$this->assertAttributeEquals('Sibject 2', 'subject', $message);

	}

	public function testSetLayout()
	{
		$message = new Message();
		$message->setLayout(2);
		$this->assertAttributeEquals(2, 'layout', $message);
	}

	public function testGetCreatedAt()
	{
		$message = new Message();
		$date = new DateTime();
		$message->setCreatedAt($date);
		$this->assertAttributeEquals($date, 'createdAt', $message);
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
		$this->assertFalse($message->getPdf());
		$message->setPdf(false);
		$this->assertFalse($message->getPdf());
		$message->setPdf(true);
		$this->assertTrue($message->getPdf());
	}

	public function testSetUpdatedAt()
	{
		$message = new Message();
		$date = new DateTime();
		$message->setUpdatedAt($date);
		$this->assertAttributeEquals($date, 'updatedAt', $message);
	}

	public function testSetReply()
	{
		$message = new Message();
		$recipient = Mockery::mock(Recipient::class);
		$message->setReply($recipient);
		$this->assertAttributeEquals($recipient, 'reply', $message);
	}

	public function testGetEntryData()
	{
		$message = new Message();
		$data = Mockery::mock(\calderawp\caldera\Messaging\Entities\EntryData::class);
		$message->setEntryData($data);
		$this->assertEquals($data, $message->getEntryData());
	}

	public function testSetEntryData()
	{
		$message = new Message();
		$data = Mockery::mock(\calderawp\caldera\Messaging\Entities\EntryData::class);

		$message->setEntryData($data);
		$this->assertAttributeEquals($data, 'entryData', $message);
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
		$this->assertFalse($message->isSpammed());
		$message->setSpammed(true);
		$this->assertTrue($message->isSpammed());
	}

	public function testGetTo()
	{
		$message = new Message();
		$recipients = Mockery::mock(Recipients::class);
		$message->setTo($recipients);
		$this->assertSame($recipients, $message->getTo());
	}

	public function testGetUpdatedAt()
	{

		$message = new Message();
		$date = new DateTime();
		$message->setUpdatedAt($date);
		$this->assertSame($date, $message->getUpdatedAt());
	}

	public function testSetSpammed()
	{
		$message = new Message();
		$message->setSpammed(true);
		$this->assertAttributeEquals(true, 'spammed', $message);
	}

	public function testGetLayout()
	{
		$message = new Message();
		$layout = Mockery::mock(\calderawp\caldera\Messaging\Models\Layout::class);
		$message->setLayout($layout);
		$this->assertSame($layout, $message->getLayout());
	}

	public function testSetCreatedAt()
	{
		$message = new Message();
		$createdAt = new DateTime();
		$message->setCreatedAt($createdAt);
		$this->assertAttributeEquals($createdAt, 'createdAt', $message);
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
		$recipients = Mockery::mock(Recipients::class);
		$message->setBcc($recipients);
		$this->assertAttributeEquals($recipients, 'bcc', $message);
	}

	public function testSetCc()
	{
		$message = new Message();
		$recipients = Mockery::mock(Recipients::class);
		$message->setCc($recipients);
		$this->assertAttributeEquals($recipients, 'cc', $message);
	}

	public function testGetPdfLayout()
	{
		$message = new Message();
		$layout = Mockery::mock(\calderawp\caldera\Messaging\Models\Layout::class);
		$message->setPdfLayout($layout);
		$this->assertSame($layout, $message->getPdfLayout());
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
		$this->assertAttributeEquals(1, 'pdf', $message);
	}

	public function testFromArray()
	{
		$id = 1;
		$layout = [ 'id' => 5, 'config' => [], 'name' => 'fsjd' ];
		$pdfLayout = [ 'id' => 6, 'config' => [], 'name' => 'fsjd' ];
		$message = Message::fromArray(['id' => $id, 'layout' => $layout, 'pdfLayout' => $pdfLayout ]);
		$this->assertIsObject($message->getPdfLayout() );
		$this->assertIsObject($message->getLayout() );
		$this->assertEquals(5, $message->getLayout()->getId() );
		$this->assertEquals(6, $message->getPdfLayout()->getId() );
	}

	public function testToArray()
	{
		$message = new Message();
		$id = 1;
		$layout = Mockery::mock(\calderawp\caldera\Messaging\Models\Layout::class);
		$layoutArrayed = [];
		$layout->shouldReceive('toArray' )->andReturn($layoutArrayed);
		$message->setId($id)->setLayout($layout);
		$array = $message->toArray();
		$this->assertEquals($id, $array['id']);
		$this->assertEquals($layoutArrayed,$array['layout']);

	}

	public function testCreateAtToFromArray()
	{
		$id = 42;
		$timestamp = '2017-06-30 11:37:06';
		$timestampUpdated = '2019-01-30 11:37:06';
		$createdAt = \calderawp\DB\Time::dateTimeFromMysql($timestamp);
		$updatedAt = \calderawp\DB\Time::dateTimeFromMysql($timestampUpdated);
		$this->assertEquals( $timestamp,  $createdAt->format(\calderawp\DB\Time::FORMAT));
		$from = [ 'id' => $id, 'createdAt' => $createdAt->format(\calderawp\DB\Time::FORMAT), 'updatedAt' =>$updatedAt  ];
		$message = Message::fromArray($from);
		$this->assertEquals($createdAt, $message->get( 'createdAt' ) );
		$this->assertEquals($timestamp, $message->toArray()['createdAt']);
		$this->assertEquals($updatedAt, $message->get( 'updatedAt' ) );
		$this->assertEquals($timestampUpdated, $message->toArray()['updatedAt']);

	}

	public function testAddRecipient(){
		$message = new Message();
		$message->addRecipient( 'to', 'foo@name.com', 'name' );
		$this->assertEquals('foo@name.com', $message->getTo()->toArray()[0]['email']);
		$message->addRecipient( 'to', 'foo2@name.com', 'name' );
		$this->assertEquals('foo@name.com', $message->getTo()->toArray()[0]['email']);
		$this->assertEquals('foo2@name.com', $message->getTo()->toArray()[1]['email']);

		$message = new Message();
		$message->addRecipient( 'reply', 'foo@name.com', 'name' );
		$this->assertEquals('foo@name.com', $message->getReply()->toArray()['email']);

		$message = new Message();
		$message->addRecipient( 'cc', 'foo@name.com', 'name' );
		$this->assertEquals('foo@name.com', $message->getCc()->toArray()[0]['email']);
		$message->addRecipient( 'cc', 'foo2@name.com', 'name' );
		$this->assertEquals('foo@name.com', $message->getCc()->toArray()[0]['email']);
		$this->assertEquals('foo2@name.com', $message->getCc()->toArray()[1]['email']);

		$message = new Message();
		$message->addRecipient( 'bcc', 'foo@name.com', 'name' );
		$this->assertEquals('foo@name.com', $message->getBcc()->toArray()[0]['email']);
		$message->addRecipient( 'bcc', 'foo2@name.com', 'name' );
		$this->assertEquals('foo@name.com', $message->getBcc()->toArray()[0]['email']);
		$this->assertEquals('foo2@name.com', $message->getBcc()->toArray()[1]['email']);
	}
}
