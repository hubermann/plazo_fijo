module PlazoFijoApi
  class App < Sinatra::Base

    get '/' do
      "Lista bancos y muestra sus tasas de interes para diferentes periodos, en el endpoint /bancos"
    end

    get '/bancos' do
      content_type :json
      bancos = [
          {'name' => 'Banco Santander','low' => 5,'soft' => 6,'high' => 7, },
          {'name' => 'Banco Nacion','low' => 3,'soft' => 5,'high' => 7, },
          {'name' => 'BBVA','low' => 4,'soft' => 6,'high' => 8, },
        ]
      bancos.to_json
    end



  end
end
