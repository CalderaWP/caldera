<?php


namespace calderawp\caldera\Messaging\Models\Transformers;


use calderawp\caldera\Messaging\Contracts\ModelContract;
use calderawp\caldera\Messaging\Contracts\RestControllerContract as Controller;
use calderawp\caldera\Messaging\Entities\EmailFromCalderaMail;
use calderawp\caldera\Messaging\Entities\Recipient;
use calderawp\caldera\Messaging\Models\Model;
use calderawp\caldera\Messaging\Models\Message as MessageModel;
use calderawp\caldera\Messaging\Contracts\MessageTransformerContract;
use SendGrid\Attachment;
use SendGrid\ClickTracking;
use SendGrid\Content;
use SendGrid\Email;
use SendGrid\Mail;
use SendGrid\OpenTracking;
use SendGrid\Personalization;
use SendGrid\TrackingSettings;

class Message extends Transformer implements MessageTransformerContract
{
	protected $controller;

	protected function getUri(): string
	{
		return '/messages';
	}

	public function setController(Controller $controller): MessageTransformerContract
	{
		$this->controller = $controller;
		return $this;
	}

	public function getController(): Controller
	{
		return $this->controller;
	}

	protected function factory(array $items = []): ModelContract
	{
		return MessageModel::fromArray($items);
	}

	public function getHttpType(): string
	{
		return 'rest';
	}

	public function toHtml(MessageModel $message, bool $pdfMode = false): string
	{

	}

	public function toSendGrid(MessageModel $message): Mail
	{
		$mail = new Mail();
		$personalization = new Personalization();
		/** @var Recipient $r */
		foreach ($message->to as $r) {
			$personalization->addTo(new Email($r->getName(), $r->getEmail()));
		}

		$personalization->setSubject($message->getSubject());

		$from = new EmailFromCalderaMail('');
		$mail->setFrom(new Email($message->reply->getName(), $from->getEmail()));

		$mail->setReplyTo(
			new Email(
				$message->reply->getName(),
				$message->reply->getEmail()
			)
		);

		$tracking_settings = new TrackingSettings();
		$click_tracking = new ClickTracking();
		$click_tracking->setEnable(true);
		$click_tracking->setEnableText(true);
		$tracking_settings->setClickTracking($click_tracking);
		$open_tracking = new OpenTracking();
		$open_tracking->setEnable(true);
		$tracking_settings->setOpenTracking($open_tracking);
		$mail->setTrackingSettings($tracking_settings);

		$mail->setSubject($message->getSubject());

		if ($message->hasCc()) {
			/** @var Recipient $r */
			foreach ($message->cc as $r) {
				$personalization->addCc(
					new Email(
						$r->getName(),
						$r->getEmail()
					));
			}
		}

		if ($message->hasBCC()) {
			/** @var Recipient $r */
			foreach ($message->bcc as $r) {
				$personalization->addBcc(
					new Email(
						$r->getName(),
						$r->getEmail()
					));
			}
		}
		$personalization->addCustomArg('cfp_id', $message->getID());

		$mail->addPersonalization($personalization);

		$html = $this->toHtml($message, false);
		$content = new Content('text/html', $html);

		$mail->addContent($content);

		$mail->addCategory('');
		$mail->addCategory('cfp');


		if ($message->getPdf()) {
			$pdfAttachment = new \SendGrid\Attachment();

			$pdfAttachment->setContent(
				base64_encode($this->toHtml($message, true))
			);

			$pdfAttachment->setType('application/pdf');
			$pdfAttachment->setFilename('message.pdf');
			$mail->addAttachment($pdfAttachment);


		}


		$attachments = [];
		//$this->findAttachments();
		//$attachments = $this->getAttachments();
		if ($attachments) {
			/** @var Attachment $attachment */
			foreach ($attachments as $attachment) {
				$sgAttachment = new \SendGrid\Attachment();
				$sgAttachment->setContent($attachment->contents);
				$sgAttachment->setFilename($attachment->name);
				$sgAttachment->setType($attachment->mime);
				$mail->addAttachment($sgAttachment);
			}
		}


		return $mail;
	}
}
