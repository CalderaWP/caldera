<?php


namespace calderawp\caldera\Messaging\Message;


use calderawp\caldera\Messaging\Entities\Entity;

class FormSettings extends Entity
{

	protected $layout;
	protected $pdfLayout;
	protected $pdf;

	public static function fromArray(array $items): Entity
	{
		if( isset( $items['pdf_layout'])){
			$items['pdfLayout'] = $items['pdf_layout'];
		}
		return parent::fromArray($items);
	}

	public function getPdfLayout(): int {
		return $this->pdfLayout ? $this->pdfLayout : 0;
	}

	public function getLayout(): int{
		return $this->layout ? $this->layout : 0;

	}

	public function shouldAttatchPdf(): bool {
		return isset($this->pdf) ? (bool) $this->pdf : false;
	}
}
