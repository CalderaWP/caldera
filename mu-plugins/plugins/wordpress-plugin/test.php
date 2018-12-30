<?php
use \calderawp\caldera\Forms\Entry\Entry;
use \calderawp\caldera\Forms\Forms\ContactForm;
use \calderawp\caldera\restApi\Request;
$dataBase = new \calderawp\caldera\WordPressPlugin\Database(
	new \calderawp\DB\Tables()
);
$dataBase->formsDatabase();
$contactForm = new ContactForm();
$request = new Request();
$request->setParams([
	'entryValues' => [
		ContactForm::FIRST_NAME => 'Roy',
		ContactForm::EMAIL => 'roy@hiroy.club',
		ContactForm::CONSENT => true,
		ContactForm::SUBMIT => 'clicked'
	],
	'formId' => $contactForm->getId()
]);

$controller = new \calderawp\caldera\Forms\Controllers\EntryController(\caldera()->getCalderaForms());
$createdEntry = $controller->createEntry(null, $request);

/** @var \calderawp\DB\Table $entryDataSource */
$entryDataSource = $dataBase
	->getDataSources()
	->getEntryDataSource();
/** @var \calderawp\DB\Table $entryValuesDataSource */
$entryValuesDataSource = $dataBase
	->getDataSources()
	->getEntryValuesDataSource();
$values = $createdEntry->valuesToArray();

$entryId = $entryDataSource->create([
	'form_id' => $createdEntry->getFormId(),
	'user_id' => null,
	'datestamp' => $createdEntry->getDateAsString()
]);


$entryValuesForDb = [];
foreach ($values as $fieldId => $value ){
	$field = $contactForm->getFields()->getField($fieldId);
	$entry = [
		'entry_id' => $entryId,
		'field_id' => $fieldId,
		'value' =>$value,
		'slug' => $field->getSlug() ? $field->getSlug() : $fieldId
	];
	$created = $entryValuesDataSource->create($entry);
	$entryValuesForDb[] = $created;

}

$entryFromDb = $entryDataSource->read($entryId);
try {
	$entryValuesFromDb = $entryValuesDataSource->findWhere('entry_id', $entryId);
} catch (\calderawp\DB\Exceptions\InvalidColumnException $e) {
	var_dump($e);
}
foreach ($entryValuesFromDb as $value ){
	$x = $entryValuesForDb[$value];
	$v = 1;
}
$x = 1;


