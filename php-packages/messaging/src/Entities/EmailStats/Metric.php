<?php


namespace calderawp\caldera\Messaging\Entities\EmailStats;


use calderawp\caldera\Messaging\Entities\Entity;
use calderawp\caldera\Messaging\Traits\SimpleRepository;

class Metric extends Entity {

	use SimpleRepository;

	protected $properties = [
		'blocks',
		'bounce_drops',
		'bounces',
		'clicks',
		'deferred',
		'delivered',
		'invalid_emails',
		'opens',
		'processed',
		'requests',
		'spam_report_drops',
		'spam_reports',
		'unique_clicks',
		'unique_opens',
		'unsubscribe_drops',
		'unsubscribes'
	];

	/**
	 * Create from array
	 *
	 * @param array $data
	 *
	 * @return Metric
	 */
	public static function fromArray( array  $data )
	{

		$obj = new static();
		foreach ( $data  as $key => $datum ){
			if( $obj->allowed( $key ) ){
				$obj->$key = $datum;
			}
		}

		return $obj;
	}



}
