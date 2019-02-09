<?php


namespace calderawp\caldera\Messaging\Models;
use calderawp\caldera\Messaging\Entities\Contracts\RecipientContract as Recipient;
use calderawp\caldera\Messaging\Entities\Contracts\RecipientsContracts as Recipients;

class Message extends Model
{
	/** @var @int */
	protected $id;
	/** @var \DateTime */
	protected $createdAt;
	/** @var \DateTime */
	protected $updatedAt;
	/** @var @int */
	protected $account;
	/** @var @int */
	protected $layout;
	/** @var @string */
	protected $content;
	/** @var @bool */
	protected $pdf;
	/** @var @int */
	protected $pdfLayout;
	/** @var Recipients */
	protected $to;
	/** @var Recipient */
	protected $reply;
	/** @var Recipients */
	protected $cc;
	/** @var Recipients */
	protected $bcc;
	/** @var string */
	protected $subject;
	/** @var bool */
	protected $spammed;
	/** @var array */
	protected $entryData;
	/** @var array */
	protected $attachments;

	/**
	 * @return mixed
	 */
	public function getId()
	{
		return $this->id;
	}

	/**
	 * @param mixed $id
	 *
	 * @return Message
	 */
	public function setId($id)
	{
		$this->id = $id;
		return $this;
	}

	/**
	 * @return \DateTime
	 */
	public function getCreatedAt(): \DateTime
	{
		return $this->createdAt;
	}

	/**
	 * @param \DateTime $createdAt
	 *
	 * @return Message
	 */
	public function setCreatedAt(\DateTime $createdAt): Message
	{
		$this->createdAt = $createdAt;
		return $this;
	}

	/**
	 * @return \DateTime
	 */
	public function getUpdatedAt(): \DateTime
	{
		return $this->updatedAt;
	}

	/**
	 * @param \DateTime $updatedAt
	 *
	 * @return Message
	 */
	public function setUpdatedAt(\DateTime $updatedAt): Message
	{
		$this->updatedAt = $updatedAt;
		return $this;
	}

	/**
	 * @return int
	 */
	public function getAccount() : int
	{
		return $this->account;
	}

	/**
	 * @param int $account
	 *
	 * @return Message
	 */
	public function setAccount(int $account) : Message
	{
		$this->account = $account;
		return $this;
	}

	/**
	 * @return int
	 */
	public function getLayout() : int
	{
		return $this->layout;
	}

	/**
	 * @param mixed $layout
	 *
	 * @return Message
	 */
	public function setLayout($layout)
	{
		$this->layout = $layout;
		return $this;
	}

	/**
	 * @return string
	 */
	public function getContent() : string
	{
		return is_string($this->content) ? $this->content : '';
	}

	/**
	 * @param mixed $content
	 *
	 * @return Message
	 */
	public function setContent(string $content = ''): Message
	{
		$this->content = $content;
		return $this;
	}

	/**
	 * @return bool
	 */
	public function getPdf() : bool
	{
		return ! is_null($this->pdf) ? (bool) $this->pdf : false;
	}

	/**
	 * @param bool $pdf
	 *
	 * @return Message
	 */
	public function setPdf(bool $pdf): Message
	{
		$this->pdf = $pdf;
		return $this;
	}

	/**
	 * @return int
	 */
	public function getPdfLayout() : int
	{
		return $this->pdfLayout;
	}

	/**
	 * @param int $pdfLayout
	 *
	 * @return Message
	 */
	public function setPdfLayout($pdfLayout)
	{
		$this->pdfLayout = $pdfLayout;
		return $this;
	}

	/**
	 * @return Recipients
	 */
	public function getTo(): Recipients
	{
		return $this->to;
	}

	/**
	 * @param Recipients $to
	 *
	 * @return Message
	 */
	public function setTo(Recipients $to): Message
	{
		$this->to = $to;
		return $this;
	}

	/**
	 * @return Recipient
	 */
	public function getReply(): Recipient
	{
		return $this->reply;
	}

	/**
	 * @param Recipient $reply
	 *
	 * @return Message
	 */
	public function setReply(Recipient $reply): Message
	{
		$this->reply = $reply;
		return $this;
	}

	/**
	 * @return Recipients
	 */
	public function getCc(): Recipients
	{
		return $this->cc;
	}

	/**
	 * @param Recipients $cc
	 *
	 * @return Message
	 */
	public function setCc(Recipients $cc): Message
	{
		$this->cc = $cc;
		return $this;
	}

	/**
	 * @return Recipients
	 */
	public function getBcc(): Recipients
	{
		return $this->bcc;
	}

	/**
	 * @param Recipients $bcc
	 *
	 * @return Message
	 */
	public function setBcc(Recipients $bcc): Message
	{
		$this->bcc = $bcc;
		return $this;
	}

	/**
	 * @return string
	 */
	public function getSubject(): string
	{
		return is_string($this->subject) ? $this->subject : '';
	}

	/**
	 * @param string $subject
	 *
	 * @return Message
	 */
	public function setSubject(string $subject): Message
	{
		$this->subject = $subject;
		return $this;
	}

	/**
	 * @return bool
	 */
	public function isSpammed(): bool
	{
		return ! is_null($this->spammed) ? (bool) $this->spammed : false;
	}

	/**
	 * @param bool $spammed
	 *
	 * @return Message
	 */
	public function setSpammed(bool $spammed): Message
	{
		$this->spammed = $spammed;
		return $this;
	}

	/**
	 * @return array
	 */
	public function getEntryData(): array
	{
		return $this->entryData;
	}

	/**
	 * @param array $entryData
	 *
	 * @return Message
	 */
	public function setEntryData(array $entryData): Message
	{
		$this->entryData = $entryData;
		return $this;
	}

	/**
	 * @return array
	 */
	public function getAttachments(): array
	{
		return $this->attachments;
	}

	/**
	 * @param array $attachments
	 *
	 * @return Message
	 */
	public function setAttachments(array $attachments): Message
	{
		$this->attachments = $attachments;
		return $this;
	}



}

