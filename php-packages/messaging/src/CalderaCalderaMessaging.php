<?php


namespace calderawp\caldera\Messaging;
use calderawp\caldera\DataSource\Tests\Unit\DataSourceTest;
use calderawp\caldera\DataSource\WordPressData\PostTypeFactory;
use calderawp\caldera\DataSource\WordPressData\PostTypeWithCustomMetaTable;
use calderawp\caldera\Messaging\Models\Message;
use calderawp\caldera\Messaging\Models\Rest\MessageController;
use calderawp\caldera\Messaging\Models\Rest\MessageRoute;
use calderawp\CalderaContainers\Service\Container as ServiceContainer;
use calderawp\DB\Factory;
use calderawp\interop\Contracts\CalderaModule;
use calderawp\interop\Module;
use calderawp\DB\Contracts\FactoryContract;
use calderawp\caldera\DataSource\WordPressData\Contracts\PostTypeFactoryContract;
use calderawp\caldera\Messaging\Contracts\CalderaMessagingContract;
use calderawp\caldera\Messaging\Contracts\MessageTransformerContract;
use calderawp\caldera\Messaging\Contracts\RestControllerContract as Controller;
use calderawp\caldera\DataSource\Contracts\SourceContract as DataSource;
class CalderaCalderaMessaging extends Module implements CalderaMessagingContract
{
	const IDENTIFIER  = 'Messaging';

	const MESSAGE_DATA_SOURCE_IDENTIFIER = 'cfp_messageDataSource';
	/**
	 * @inheritDoc
	 */
	public function getIdentifier(): string
	{
		return self::IDENTIFIER;
	}

	public function registerServices(ServiceContainer $container): CalderaModule
	{

		$dataSource = $container->make(self::MESSAGE_DATA_SOURCE_IDENTIFIER );
		$this->getServiceContainer()->singleton(FactoryContract::class, function (){
			return new Factory();
		});

		$handleAuth = function (){};//@todo figure out auth next
		$this->core->addModule($this);

		return $this;
	}

	public function getMessageRoute(): MessageRoute
	{
		return $this->core->getRestApi()->getRoute(MessageRoute::class);
	}

}
