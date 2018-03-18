angular.module('intranet').controller('FotosController', function($scope) {

	$scope.fotos = [

		{
			titulo : 'Novo escritório',
			url: 'img/news/office1.jpg',
			txt: 'Acompanhe a obra do novo escritório da Insurance Company que será inaugurado em breve.'			
		},
		{
			titulo : 'Proteja sua senha',
			url: 'img/news/cadeado.jpg',
			txt: 'O que a agência de notícias Associated Press, o apresentador Luciano Huck, e a UPPRJ (Unidade de Polícia Pacificadora do Rio de Janeiro) têm em comum?'			
		},
		{
			titulo : 'Prevenção de fraudes',
			url: 'img/news/money.jpg',
			txt: 'Começa nesse mês o treinamento de combate a lavagem de dinheiro e fraudes, não deixe de participar.'			
		},		
		{
			titulo : 'Não corra riscos',
			url: 'img/news/insurance.jpg',
			txt: 'Você colaborador possui descontos ao adquirir nossos seguros, clique e faça sua cotação!'			
		}
	];
});
