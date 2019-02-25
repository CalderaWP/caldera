<?php


namespace calderawp\caldera\Messaging\Message;


use calderawp\interop\Attribute;

class Attributes extends \calderawp\interop\Collections\Attributes
{

	/**
	 * @var array
	 */
	protected $_attributes;

	protected function getSchema(){
		$schema = [];

		$reqInt = function (string $description) {
			return [
				'type' => 'integer',
				'required' => true,
				'description' => $description,
				'sqlDescriptor' => 'int(11) unsigned NOT NULL',
			];
		};
		$defaultInt = function (int $default,string $description) use($reqInt) {
			return
				[
					'type' => 'integer',
					'required' => false,
					'description' => $description,
					'default' => $default,
					'sqlDescriptor' => 'int(11) unsigned DEFAULT NULL',
				];

		};
		$recipients = function (string $description,bool$required){
			return [
				'type' => 'array',
				'description' => $description,
				'required' => $required,
				'sqlDescriptor' => $required ? 'longtext NOT NULL' :'longtext DEFAULT NULL',

			];
		};
		$requiredString = function (string $description){
			return [
				'type' => 'string',
				'description' => $description,
				'required' => true,
				'sqlDescriptor' => 'varchar(255) NOT NULL',
			];
		};
		$schema[ 'id' ] = $reqInt('Unique Identifier');
		$schema[ 'id' ]['sqlDescriptor'] =  'int(11) unsigned NOT NULL AUTO_INCREMENT';

		$schema[ 'accountId' ] = $reqInt('ID of account that message belongs to.');
		$schema[ 'layout' ] = $defaultInt(0, 'Layout for email message');
		$schema[ 'pdfLayout' ] = $defaultInt(0, 'Layout for pdf');
		$schema[ 'createdAt' ] = [
			'type' => 'date-time',
			'required' => false,
			'description' => 'Time message created at',
			'default' => new \DateTimeImmutable(),
			'sqlDescriptor' => 'timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP',

		];
		$schema[ 'updatedAt' ] = [
			'type' => 'date-time',
			'required' => false,
			'description' => 'Time message updated at',
			'default' => new \DateTimeImmutable(),
			'sqlDescriptor' => 'timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP',
		];
		$schema[ 'to' ] = $recipients('Primary Recipients of message', true );
		$schema[ 'reply'] = [
			'type' => 'string',
			'required' => true,
			'description' => 'The message reply to',
			'sqlDescriptor' => 'longtext NOT NULL',
		];
		$schema[ 'cc' ] = $recipients('CC Recipients of message', false );
		$schema[ 'bcc' ] = $recipients('BCC Recipients of message', false );
		$schema[ 'spammed' ] = [
			'type' => 'boolean',
			'description' => 'Has message been marked spam?',
			'sqlDescriptor' => 'TINYINT(1)',

		];
		$schema[ 'content' ] = $requiredString( 'Message Content' );
		$schema[ 'subject' ] = $requiredString( 'Message Subject' );
		$schema[ 'entryData' ]= [
			'type' => 'array',
			'description' => 'Entry data',
			'required' => true,
			'sqlDescriptor' => 'longtext NOT NULL',
		];

		return $schema;
	}

	public function __construct()
	{
		foreach ($this->getSchema() as $key =>$array){
			$array['name'] = $key;
			$this->addAttribute( Attribute::fromArray($array));
		}
	}

	public function toRestApiArgs()
	{
		$args = [];
		foreach ( $this->attributes as $name => $attribute ){
			$args[$name] = [
				'description' => $attribute->getDescription(),
				'type'        => $attribute->getDataType(),
				'required'    => $attribute->isRequired(),
				'validate_callback' => $attribute->getValidateCallback(),
				'sanitize_callback' => $attribute->getSanitizeCallback(),
				'default' => $attribute->getDefault()
			];
		}
		return $args;
	}







}
