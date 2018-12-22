<?php


namespace calderawp\caldera\Events;

use calderawp\interop\Traits\WordPress\ProvidesFilters;
use calderawp\interop\Contracts\WordPress\ApplysFilters;

class Filters implements ApplysFilters
{

	use ProvidesFilters;
}
