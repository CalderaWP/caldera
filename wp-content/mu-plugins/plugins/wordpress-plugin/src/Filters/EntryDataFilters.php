<?php


namespace calderawp\caldera\WordPressPlugin\Filters;

use calderawp\caldera\Forms\DataSources\FormsDataSources;
use calderawp\caldera\Forms\Contracts\EntryCollectionContract as Entries;
use calderawp\caldera\Forms\Contracts\EntryContract as Entry;
use calderawp\caldera\Forms\Entry\EntryValue;
use calderawp\caldera\Forms\Entry\EntryValues;
use calderawp\caldera\Forms\EntryCollection;
use calderawp\caldera\Forms\FormModel;
use calderawp\caldera\Forms\Traits\AddsEntryValuesFromRequest;
use calderawp\caldera\restApi\Request;
use calderawp\interop\Contracts\WordPress\ApplysFilters;


class EntryDataFilters
{

	use AddsEntryValuesFromRequest;
	/** @var ApplysFilters */
	protected $filters;

	/** @var FormsDataSources */
	protected $dataSources;

	public function __construct(ApplysFilters $filters, FormsDataSources $dataSources)
	{
		$this->filters = $filters;
		$this->dataSources = $dataSources;
	}

	public function addHooks()
	{
		$this
			->filters
			->addFilter("caldera/forms/createEntry", [$this, 'createEntry'], 5, 2);
		$this
			->filters
			->addFilter("caldera/forms/getEntries", [$this, 'getEntries'], 5, 2);
	}

	/**
	 * Create an entry and return it
	 *
	 * @param Entry|null $entry
	 * @param Request $request
	 *
	 * @return Entry
	 */
	public function createEntry(?Entry $entry, Request $request): Entry
	{
		if (!is_a($entry, Entry::class)) {
			$formId = $request->getParam('formId');
			$entryId = $this
				->dataSources
				->getEntryDataSource()
				->create([
						'form_id' => $formId,
						'user_id' => 0,
						'datestamp' => (new \DateTime())->format(\calderawp\caldera\Forms\Entry\Entry::DATE_FORMAT),
					]
				);

			$entry = $this
				->dataSources
				->getEntryDataSource()
				->read($entryId);
			$entry = $this->addValuesToEntry($entry,$this->findForm($formId));
			$entryValuesDataSource = $this
				->dataSources
				->getEntryValuesDataSource();
			/** @var EntryValue $entryValue */
			foreach ( $entry->getEntryValues() as $entryValue ){
				$entryValuesDataSource->create($entryValue->toDatabaseArray() );
			}

		}
		return $this->addValuesToEntry($entry,$formId);
	}

	/**
	 * Get all entries by form Id
	 *
	 * @param Entries|null $entries
	 * @param $request
	 *
	 * @return array|Entries|EntryCollection|null|\WpDbTools\Type\Result
	 * @throws \calderawp\DB\Exceptions\InvalidColumnException
	 * @throws \calderawp\caldera\Forms\Exception
	 */
	public function getEntries(?Entries $entries, $request)
	{
		if (!is_a($entries, Entries::class)) {
			$formId = $request->getParam('formId');
			$entries = $this
				->dataSources
				->getEntryDataSource()
				->findWhere('form_id', $formId);
			$entries = EntryCollection::fromDatabaseResults($entries);
			foreach ($entries as $entry ){
				$entries->removeEntry($entry);
				$entry = $this->addValuesToEntry($entry,$formId);
				$entries->addEntry($entry);
			}
		}
		return $entries;

	}

	protected function addValuesToEntry(Entry $entry,$formId ) : Entry
	{
		$form = $this->findForm($formId);
		$results = $this->dataSources
			->getEntryValuesDataSource()
			->findWhere('entry_id', $entry->getId() );
		foreach ($results as $result ){
			$entryValue = EntryValue::fromDataBaseResults($result,$form);
			$entry->addEntryValue($entryValue);
		}
		return $entry;


	}

	/**
	 * @param $formId
	 *
	 * @return FormModel|\calderawp\interop\Contracts\Interoperable
	 */
	protected function findForm($formId)
	{
		$form = FormModel::fromArray(['id' => $formId]);
		return $form;
	}

}
