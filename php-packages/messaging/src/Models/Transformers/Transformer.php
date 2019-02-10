<?php


namespace calderawp\caldera\Messaging\Models\Transformers;


use calderawp\caldera\Messaging\Models\Model;
use calderawp\caldera\Messaging\Models\Message as MessageModel;
use calderawp\interop\Contracts\HttpRequestContract as Request;
use calderawp\interop\Contracts\HttpResponseContract as Response;


abstract class Transformer
{


	abstract protected function factory(array  $items= []): Model;
	abstract protected function getHttpType(): string ;
	public function fromRequest( Request $request ) : Model
	{
		return $this->factory($request->getParams() );


	}

	public function toRequest(Model $model ): Request
	{
		$array = [ 'params' => $model->toArray() ];
		if( 'rest' === $this->getHttpType() ){
			return  \calderawp\caldera\restApi\Request::fromArray($array);
		}
		return  \calderawp\caldera\Http\Request::fromArray($array);

	}

	public function fromResponse( Response $response ) : Model
	{
		return $this->factory($response->getData());
	}

}
