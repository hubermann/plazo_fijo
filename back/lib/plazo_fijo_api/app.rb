module PlazoFijoApi
  class App < Sinatra::Base

    get '/' do
      "Lista bancos y muestra sus tasas de interes para diferentes periodos, en el endpoint /bancos"
    end

    get '/bancos' do
      content_type :json
      bancos = {"bancos" => {
        'id' => 1 => {'name' => 'Banco Santander','tasa' => '4,5'},
        'id' => 2 => {'name' => 'Banco Nacion','tasa' => 7},
        'id' => 3 => {'name' => 'Banco Comafi','tasa' => 5},
      }
    }
      bancos.to_json
    end

    

  end
end