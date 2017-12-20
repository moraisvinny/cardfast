module.exports = function (app) {
    app.post('/cartoes/autoriza', function (req, res) {
        console.log("processando pagamento com cartão");

        var cartao = req.body;

        req.assert("numero", "Número é obrigatório e deve conter 16 caracteres").notEmpty().len(16, 16);
        req.assert("bandeira", "Bandeira é obrigatório").notEmpty();
        req.assert("ano_de_expiracao", "Ano de expiracao é obrigatório e deve conter 4 caracteres").notEmpty().len(4, 4);
        req.assert("mes_de_expiracao", "Mes de expiracao é obrigatório e deve conter 2 caracteres").notEmpty().len(2, 2);
        req.assert("cvv", "Cvv é obrigatorio e deve conter 3 caracteres").notEmpty().len(3, 3);

        var erros = req.validationErrors();

        if (erros) {
            console.log("Houve erros de validação");
            res.status(400).send(erros);
            return;
        }

        cartao.status = 'AUTORIZADO';
        response = { dados_do_cartao: cartao };
        res.status(201).json(response);
    });
};