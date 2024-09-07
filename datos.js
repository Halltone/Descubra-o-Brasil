let datos = [
    {
        Cidade: "Rio de Janeiro",
        Ubicacion: "Rio de Janeiro, Rio de Janeiro, Brasil",
        Descripcion: "Conhecida mundialmente por suas praias icônicas como Copacabana e Ipanema, além de pontos turísticos famosos como o Cristo Redentor, uma das novas sete maravilhas do mundo, e o Pão de Açúcar, que oferece vistas panorâmicas deslumbrantes da cidade. Rio de Janeiro também é famosa por seu vibrante carnaval, considerado o maior do mundo, que atrai milhões de turistas todos os anos.",
        Cultura: "Rica em música e dança, especialmente o samba e a bossa nova. A cidade é um importante centro cultural, com muitos teatros, museus e festivais ao longo do ano.",
        Gastronomia: "Famosa pela feijoada, um prato tradicional de feijão preto com carne de porco, e pela caipirinha, um coquetel feito com cachaça, limão e açúcar. Frutos do mar frescos também são muito populares.",
        Clima: "Tropical, com verões quentes e invernos amenos. A temperatura média anual é de cerca de 23°C."
    },
    {
        Cidade: "Salvador",
        Ubicacion: "Salvador, Bahia, Brasil",
        Descripcion: "Primeira capital do Brasil, Salvador é conhecida por suas belas praias, arquitetura colonial e o Pelourinho, um bairro histórico com ruas de paralelepípedos e edifícios coloridos. A cidade é um importante centro cultural e histórico, com uma forte influência africana visível em sua música, dança e culinária.",
        Cultura: "Forte influência africana, com destaque para o carnaval, que é um dos mais animados do país, e o candomblé, uma religião afro-brasileira. Salvador também é conhecida por sua música, incluindo o axé e o samba-reggae.",
        Gastronomia: "Acarajé, moqueca e vatapá são pratos típicos. A culinária baiana é conhecida por seu uso generoso de dendê (óleo de palma) e pimenta.",
        Clima: "Tropical, quente e úmido durante todo o ano, com uma temperatura média anual de cerca de 25°C."
    },
    {
        Cidade: "Foz do Iguaçu",
        Ubicacion: "Foz do Iguaçu, Paraná, Brasil",
        Descripcion: "Famosa pelas Cataratas do Iguaçu, uma das maiores e mais impressionantes quedas d'água do mundo, localizada no Parque Nacional do Iguaçu, um Patrimônio Mundial da UNESCO. A cidade é um importante destino turístico, atraindo visitantes de todo o mundo para ver as cataratas e explorar a rica biodiversidade da região.",
        Cultura: "Diversidade cultural devido à proximidade com Argentina e Paraguai. A cidade é um ponto de encontro de diferentes culturas e tradições.",
        Gastronomia: "Churrasco, pratos argentinos e paraguaios são comuns devido à influência dos países vizinhos.",
        Clima: "Subtropical, com verões quentes e invernos suaves. A temperatura média anual é de cerca de 20°C."
    },
    {
        Cidade: "São Paulo",
        Ubicacion: "São Paulo, São Paulo, Brasil",
        Descripcion: "Maior cidade do Brasil e uma das maiores do mundo, São Paulo é um importante centro financeiro, cultural e gastronômico. A cidade é conhecida por sua arquitetura moderna, arranha-céus e uma vida noturna vibrante. São Paulo também abriga muitos museus, parques e eventos culturais de renome internacional.",
        Cultura: "Diversidade cultural com influências de imigrantes italianos, japoneses, árabes e muitos outros. A cidade é um caldeirão cultural, com uma rica cena artística e musical.",
        Gastronomia: "Pizza, sushi e uma vasta variedade de restaurantes internacionais. São Paulo é conhecida como a capital gastronômica do Brasil.",
        Clima: "Subtropical, com verões quentes e invernos amenos. A temperatura média anual é de cerca de 19°C."
    },
    {
        Cidade: "Florianópolis",
        Ubicacion: "Florianópolis, Santa Catarina, Brasil",
        Descripcion: "Conhecida como a 'Ilha da Magia', Florianópolis é famosa por suas belas praias, dunas e lagoas. A cidade é um popular destino turístico, especialmente para os amantes de esportes aquáticos como surf e kitesurf. Florianópolis também é conhecida por sua vida noturna animada e eventos culturais.",
        Cultura: "Influência açoriana, com festas tradicionais e folclore. A cidade celebra muitas festas típicas, como a Festa do Divino Espírito Santo.",
        Gastronomia: "Frutos do mar, especialmente ostras, que são cultivadas localmente e consideradas algumas das melhores do Brasil.",
        Clima: "Subtropical, com verões quentes e invernos suaves. A temperatura média anual é de cerca de 21°C."
    },
    {
        Cidade: "Brasília",
        Ubicacion: "Brasília, Distrito Federal, Brasil",
        Descripcion: "Capital do Brasil, Brasília é conhecida por sua arquitetura moderna e inovadora, projetada por Oscar Niemeyer. A cidade foi planejada e construída na década de 1960 e é um Patrimônio Mundial da UNESCO. Brasília é um importante centro político e administrativo, além de ser um polo cultural com muitos museus, teatros e eventos.",
        Cultura: "Centro político e cultural, com muitos museus e teatros. A cidade é um ponto de encontro de pessoas de todo o Brasil, o que contribui para sua diversidade cultural.",
        Gastronomia: "Diversidade de pratos regionais de todo o Brasil, refletindo a diversidade de sua população.",
        Clima: "Tropical de altitude, com estação seca e chuvosa bem definidas. A temperatura média anual é de cerca de 21°C."
    },
    {
        Cidade: "Ouro Preto",
        Ubicacion: "Ouro Preto, Minas Gerais, Brasil",
        Descripcion: "Cidade histórica famosa por sua arquitetura colonial e igrejas barrocas, Ouro Preto é um Patrimônio Mundial da UNESCO. Fundada no final do século XVII, a cidade foi um importante centro de mineração de ouro durante o período colonial. Hoje, Ouro Preto é um destino turístico popular, conhecido por suas ruas de paralelepípedos e rica história.",
        Cultura: "Rica em história e arte, com muitos museus e festivais culturais. A cidade é um importante centro de preservação do patrimônio histórico e cultural do Brasil.",
        Gastronomia: "Comida mineira, como pão de queijo, feijão tropeiro e doces típicos.",
        Clima: "Tropical de altitude, com verões quentes e invernos frescos. A temperatura média anual é de cerca de 18°C."
    },
    {
        Cidade: "Olinda",
        Ubicacion: "Olinda, Pernambuco, Brasil",
        Descripcion: "Cidade histórica conhecida por seu carnaval e arquitetura colonial, Olinda é um Patrimônio Mundial da UNESCO. Fundada no século XVI, a cidade possui um centro histórico bem preservado com igrejas barrocas e ruas de paralelepípedos. Olinda é famosa por seu carnaval de rua, que atrai milhares de visitantes todos os anos.",
        Cultura: "Forte influência portuguesa, com muitas festas e tradições culturais. A cidade é um importante centro de arte e cultura, com muitos ateliês e galerias.",
        Gastronomia: "Comida nordestina, como tapioca, bolo de rolo e pratos à base de frutos do mar.",
        Clima: "Tropical, quente e úmido durante todo o ano. A temperatura média anual é de cerca de 26°C."
    },
    {
        Cidade: "Bonito",
        Ubicacion: "Bonito, Mato Grosso do Sul, Brasil",
        Descripcion: "Destino ecoturístico famoso por suas águas cristalinas, cavernas e rica biodiversidade. Bonito é um dos principais destinos de ecoturismo no Brasil, oferecendo atividades como mergulho, flutuação e trilhas. A cidade é conhecida por suas práticas de turismo sustentável e preservação ambiental.",
        Cultura: "Foco na preservação ambiental e turismo sustentável. A cidade promove a conscientização ambiental e a conservação de seus recursos naturais.",
        Gastronomia: "Peixes de água doce, como o pacu e o pintado, são pratos típicos da região.",
        Clima: "Tropical, com estação seca e chuvosa bem definidas. A temperatura média anual é de cerca de 24°C."
    },
    {
        Cidade: "Manaus",
        Ubicacion: "Manaus, Amazonas, Brasil",
        Descripcion: "Capital do Amazonas, Manaus é a porta de entrada para a Floresta Amazônica. A cidade é um importante centro econômico e cultural da região Norte do Brasil. Manaus é conhecida por seu Teatro Amazonas, um belo exemplo de arquitetura renascentista, e por sua rica biodiversidade. A cidade oferece muitas oportunidades para ecoturismo e exploração da floresta tropical.",
        Cultura: "Rica em cultura indígena e festivais como o Boi-Bumbá. Manaus é um importante centro de tradições culturais e celebrações regionais.",
        Gastronomia: "Peixes amazônicos, como o tambaqui e o pirarucu, são pratos típicos. A culinária local também inclui ingredientes exóticos da floresta.",
        Clima: "Equatorial, quente e úmido durante todo o ano. A temperatura média anual é de cerca de 27°C."
    },
    {
        Cidade: "Gramado",
        Ubicacion: "Gramado, Rio Grande do Sul, Brasil",
        Descripcion: "Gramado é uma charmosa cidade serrana conhecida por sua arquitetura europeia, principalmente de influência alemã e italiana, além de ser famosa pelo Natal Luz e o Festival de Cinema de Gramado.",
        Cultura: "A cultura de Gramado é fortemente influenciada pelos imigrantes europeus, com destaque para as tradições alemãs e italianas. Eventos culturais como o Festival de Cinema de Gramado atraem visitantes de todo o Brasil.",
        Gastronomia: "A gastronomia de Gramado é rica em pratos típicos alemães e italianos, além de ser famosa pelo fondue e pelo chocolate artesanal.",
        Clima: "O clima de Gramado é subtropical, com verões amenos e invernos frios, sendo comum a ocorrência de geadas e, em raras ocasiões, neve."
    },
    {
        Cidade: "Fernando de Noronha",
        Ubicacion: "Fernando de Noronha, Pernambuco, Brasil",
        Descripcion: "Fernando de Noronha é um arquipélago paradisíaco famoso por suas praias de águas cristalinas, vida marinha exuberante e práticas de preservação ambiental.",
        Cultura: "A cultura local é fortemente ligada à preservação do meio ambiente, e o turismo sustentável é uma das principais preocupações. As festividades locais são discretas, voltadas para a comunidade.",
        Gastronomia: "A gastronomia local oferece frutos do mar frescos, como peixes e camarões, com destaque para a moqueca e pratos com influências pernambucanas.",
        Clima: "O clima é tropical, com duas estações bem definidas: uma seca e outra chuvosa. As temperaturas são agradáveis durante todo o ano."
    },
    {
        Cidade: "Paraty",
        Ubicacion: "Paraty, Rio de Janeiro, Brasil",
        Descripcion: "Paraty é uma cidade histórica conhecida por seu bem preservado centro colonial e pela beleza natural de suas praias e montanhas.",
        Cultura: "A cultura de Paraty reflete sua rica história colonial, com eventos como a Festa Literária Internacional de Paraty (FLIP) atraindo escritores e leitores de todo o mundo.",
        Gastronomia: "A gastronomia é marcada por frutos do mar, com pratos tradicionais como camarão, peixes frescos e o famoso cachaça local.",
        Clima: "O clima é tropical, com verões quentes e úmidos e invernos mais secos e agradáveis."
    },
    {
        Cidade: "Jericoacoara",
        Ubicacion: "Jericoacoara, Ceará, Brasil",
        Descripcion: "Jericoacoara é uma vila de pescadores transformada em destino turístico, conhecida por suas dunas, lagoas de água doce e ambiente rústico.",
        Cultura: "A cultura local é simples e rústica, fortemente ligada à vida dos pescadores e à tranquilidade do lugar. A música regional e o artesanato local fazem parte do cotidiano.",
        Gastronomia: "A gastronomia local é baseada em frutos do mar, com destaque para pratos como lagosta, camarão e peixes frescos.",
        Clima: "O clima é tropical semiárido, com altas temperaturas durante todo o ano e ventos constantes, ideais para a prática de esportes aquáticos."
    },
    {
        Cidade: "Búzios",
        Ubicacion: "Búzios, Rio de Janeiro, Brasil",
        Descripcion: "Búzios é uma famosa cidade litorânea conhecida por suas belas praias e vida noturna agitada, atraindo turistas do mundo inteiro.",
        Cultura: "A cultura de Búzios reflete a mistura entre o charme rústico de uma vila de pescadores e o glamour do turismo internacional. O cinema e a música também têm forte presença.",
        Gastronomia: "A gastronomia é diversificada, com restaurantes de alta gastronomia que servem pratos internacionais, além de pratos locais com frutos do mar.",
        Clima: "O clima é tropical litorâneo, com verões quentes e invernos amenos, ideal para o turismo durante todo o ano."
    },
    {
        Cidade: "Ubatuba",
        Ubicacion: "Ubatuba, São Paulo, Brasil",
        Descripcion: "Ubatuba é uma cidade litorânea conhecida por suas belas praias, florestas preservadas e por ser um destino popular entre surfistas.",
        Cultura: "A cultura de Ubatuba está ligada à preservação ambiental e às tradições caiçaras, com festas populares como a Festa de São Pedro Pescador.",
        Gastronomia: "A gastronomia local é baseada em frutos do mar frescos, com destaque para o peixe grelhado e a moqueca caiçara.",
        Clima: "O clima é tropical úmido, com chuvas frequentes no verão e temperaturas agradáveis durante todo o ano."
    },
    {
        Cidade: "Alter do Chão",
        Ubicacion: "Alter do Chão, Pará, Brasil",
        Descripcion: "Alter do Chão é uma vila turística situada às margens do Rio Tapajós, conhecida como o 'Caribe Amazônico' devido às suas praias de águas cristalinas e areia branca.",
        Cultura: "A cultura local é fortemente influenciada pelos povos indígenas da Amazônia, com tradições, festas e artesanatos locais sendo preservados.",
        Gastronomia: "A gastronomia de Alter do Chão é rica em peixes de água doce, como o tambaqui e o pirarucu, além de frutas regionais como o açaí e o cupuaçu.",
        Clima: "O clima é tropical, com temperaturas elevadas e um período de chuvas mais intensas entre dezembro e maio."
    },
    {
        Cidade: "São Luís",
        Ubicacion: "São Luís, Maranhão, Brasil",
        Descripcion: "São Luís é uma cidade histórica, famosa por seu centro colonial bem preservado, com influências portuguesas e francesas, além de ser conhecida como a capital do reggae no Brasil.",
        Cultura: "A cultura de São Luís é vibrante, com destaque para o bumba-meu-boi, festas de São João e uma forte influência da música reggae.",
        Gastronomia: "A gastronomia maranhense é diversa, com pratos típicos como arroz de cuxá, torta de camarão e peixes de água salgada.",
        Clima: "O clima é tropical, com verões quentes e úmidos e invernos mais secos."
    },
    {
        Cidade: "Cuiabá",
        Ubicacion: "Cuiabá, Mato Grosso, Brasil",
        Descripcion: "Cuiabá é a capital do Mato Grosso, conhecida como 'Portal da Amazônia' e 'Portal do Pantanal', sendo um ponto de entrada para importantes biomas brasileiros.",
        Cultura: "A cultura de Cuiabá é marcada pelas tradições indígenas, pela música sertaneja e pelo siriri, dança típica da região.",
        Gastronomia: "A culinária local é influenciada pela pesca, com pratos como mojica de pintado, farofa de banana e arroz com pequi.",
        Clima: "O clima é tropical quente e semiúmido, com temperaturas elevadas durante a maior parte do ano e um período de chuvas concentrado no verão."
    },
    {
        Cidade: "Vitória",
        Ubicacion: "Vitória, Espírito Santo, Brasil",
        Descripcion: "Vitória é uma cidade-ilha, capital do Espírito Santo, conhecida por suas belas praias, montanhas e por ser um importante centro portuário do Brasil.",
        Cultura: "A cultura capixaba tem forte influência da colonização portuguesa, com manifestações culturais como o congo e a festa da Penha.",
        Gastronomia: "A culinária local é famosa pela moqueca capixaba, um prato típico feito com peixe e temperos locais, além de frutos do mar.",
        Clima: "O clima de Vitória é tropical litorâneo, com verões quentes e úmidos e invernos mais amenos."
    },
    {
        Cidade: "Porto Alegre",
        Ubicacion: "Porto Alegre, Rio Grande do Sul, Brasil",
        Descripcion: "Porto Alegre é a capital do Rio Grande do Sul, conhecida por sua rica história, parques e intensa vida cultural, além de ser um importante centro econômico do sul do Brasil.",
        Cultura: "A cultura de Porto Alegre é influenciada por imigrantes europeus, especialmente alemães e italianos, além da tradição gaúcha, marcada pelo chimarrão e churrasco.",
        Gastronomia: "A culinária local é conhecida pelo churrasco gaúcho, além de pratos como o carreteiro e o arroz de charque.",
        Clima: "O clima é subtropical, com verões quentes e invernos frios, sendo comum a ocorrência de geadas."
    },
    {
        Cidade: "João Pessoa",
        Ubicacion: "João Pessoa, Paraíba, Brasil",
        Descripcion: "João Pessoa é a capital da Paraíba, conhecida por suas praias de águas claras, seu centro histórico preservado e por ser uma das cidades mais arborizadas do Brasil.",
        Cultura: "A cultura de João Pessoa é rica em manifestações populares, como o forró, o coco de roda e as festividades juninas. A cidade também possui um forte cenário artístico e cultural, com destaque para o artesanato local.",
        Gastronomia: "A gastronomia local é marcada por pratos típicos do nordeste, como carne de sol, macaxeira, baião de dois e frutos do mar, como camarão e lagosta.",
        Clima: "O clima é tropical, com temperaturas elevadas durante todo o ano e uma estação chuvosa que vai de março a agosto."
    },
    {
        Cidade: "Fortaleza",
        Ubicacion: "Fortaleza, Ceará, Brasil",
        Descripcion: "Fortaleza é a capital do Ceará, conhecida por suas praias extensas, clima ensolarado e por ser um importante centro turístico e cultural do nordeste brasileiro.",
        Cultura: "A cultura de Fortaleza é vibrante e diversa, marcada por festivais de música, teatro e dança, além das tradições populares como o forró e o maracatu. O artesanato, especialmente as rendas e bordados, também é um símbolo cultural da região.",
        Gastronomia: "A gastronomia de Fortaleza é rica em frutos do mar, com pratos típicos como peixada, caranguejo e lagosta. Outros destaques incluem o baião de dois, a tapioca e a carne de sol.",
        Clima: "O clima é tropical semiárido, com temperaturas elevadas durante todo o ano e uma estação chuvosa entre fevereiro e maio."
    },
    {
        Cidade: "Aracaju",
        Ubicacion: "Aracaju, Sergipe, Brasil",
        Descripcion: "Aracaju é a capital do estado de Sergipe, conhecida por suas praias tranquilas, parques e por ser uma das capitais mais organizadas e seguras do nordeste.",
        Cultura: "A cultura de Aracaju é fortemente influenciada pelas tradições nordestinas, com destaque para o forró, as festas juninas e o artesanato local. A cidade também possui um cenário musical e literário crescente.",
        Gastronomia: "A gastronomia de Aracaju é marcada por pratos típicos nordestinos, como caranguejo, moqueca de peixe, além de pratos com carne de sol e macaxeira.",
        Clima: "O clima é tropical, com temperaturas quentes durante todo o ano e uma estação chuvosa entre abril e agosto."
    }
    
]