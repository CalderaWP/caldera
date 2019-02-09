<?php


namespace calderawp\caldera\Messaging\Message;


use calderawp\caldera\Messaging\Models\Message;

class MessageFactory
{


	public function fromCfMainMailer( int $entryId, array  $mail,FormSettings $formSettings ): Message
	{
		$message = new Message();
		$message->addRecipient('reply', $mail[ 'from' ], isset($mail[ 'from_name' ])? $mail[ 'from_name' ] : '');

		if ( is_string($mail[ 'recipients' ]) ) {
			$message->addRecipient('to', $mail[ 'recipients' ]);
		} elseif ( is_array($mail[ 'recipients' ]) && !empty($mail[ 'recipients' ]) ) {
			foreach ( $mail[ 'recipients' ] as $to ) {
				$message->addRecipient('to', $to);
			}

		}

		$message->subject = $mail[ 'subject' ];
		$message->content = $mail[ 'message' ];
		$message->pdfLayout = $formSettings->getPdfLayout();
		$message->layout = $formSettings->getLayout();
		if ( !empty($mail[ 'cc' ]) ) {
			$ccs = $this->safeExplode($mail[ 'cc' ]);
			foreach ( $ccs as $cc ) {
				$message->addRecipient('cc', $cc);

			}

		}

		if ( !empty($mail[ 'bcc' ]) ) {
			$bccs = $this->safeExplode($mail[ 'bcc' ]);
			foreach ( $bccs as $bcc ) {
				$message->addRecipient('bcc', $bcc);

			}
		}

		if ( $formSettings->shouldAttatchPdf() ) {
			$message->pdf = true;
		}

		if ( isset($mail[ 'attachments' ]) && !empty($mail[ 'attachments' ]) ) {
			$message->setAttachments($mail['attachments']);
		}
		$message->entryId = $entryId;

		return $message;
	}

	/**
	 * Safely exploded, what might be a string with a comma

	 * @param string|array $string
	 *
	 * @return array
	 */
	protected function safeExplode($string)
	{
		if (!is_array($string)&& ! empty( $string)) {
			if (false === strpos($string, ',')) {
				return [$string];
			}
			return explode(',', $string);
		}
		return $string;
	}
}
