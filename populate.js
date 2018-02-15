import mongoose from 'mongoose';
import Kohde from './models/kohde';

//This files data can be added to database by running populate.js on server console.
const kohteet = [
    {
        "_id": 1,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "000000000",
            "postalCode": "00100",
            "street": "Hiekkarannantie 11"
        },
        "info": "Hietarannan uimaranta on käytännössä Helsingin kantakaupungista. Kyseessä on Helsingin suosituin ja parhaiten varusteltu uimaranta. Ranta tunnetaan myös nimillä Hietsu ja Hietaniemen uimaranta.",
        "location": {
            "latitude": 60.173932,
            "longitude": 24.906107
        },
        "name": "Hietaniemen uimaranta",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://www.hagerlund.net/sites/default/files/images/uimarannat/hietaranta/hietarannan_uimaranta_eli_hietsu_-_helsinki_10.jpg",
            "http://www.hagerlund.net/sites/default/files/images/uimarannat/hietaranta/hietarannan_uimaranta_eli_hietsu_-_helsinki_13.jpg",
            "http://www.hagerlund.net/sites/default/files/images/uimarannat/hietaranta/hietarannan_uimaranta_eli_hietsu_-_helsinki_15.jpg",
            "http://www.hagerlund.net/sites/default/files/images/uimarannat/hietaranta/hietarannan_uimaranta_eli_hietsu_-_helsinki_2.jpg",
            "http://www.hagerlund.net/sites/default/files/images/uimarannat/hietaranta/hietarannan_uimaranta_eli_hietsu_-_helsinki_6.jpg"
        ],
        "type": "Sight"
    },
    {
        "_id": 2,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "000000000",
            "postalCode": "00250",
            "street": "Mechelininkatu"
        },
        "info": "Sibelius-monumentti on Eila Hiltusen tekemä haponkestävästä teräksestä valmistettu veistos Helsingin Töölössä Sibeliuksen puistossa. Veistos painaa 24 tonnia, ja siinä on yli 600 putkea. Monumentti on 8,5 metriä korkea, 10,5 metriä pitkä ja 6,5 metriä syvä. Se on Helsingin suosituimpia veistoksia ja tunnetuimpia matkailunähtävyyksiä.",
        "location": {
            "latitude": 60.182113,
            "longitude": 24.913422
        },
        "name": "Sibeliusmonumentti",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "https://commons.wikimedia.org/wiki/Category:Sibelius_Park#/media/File:Merikannontie_-_panoramio_(3).jpg",
            "https://commons.wikimedia.org/wiki/Category:Sibelius_Park#/media/File:Sibelius_park3.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Jean_Sibelius_Park.jpg/1024px-Jean_Sibelius_Park.jpg"
        ],
        "type": "Sight"
    },
    {
        "_id": 3,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "000000000",
            "postalCode": "00330",
            "street": "Gert Skytten puisto"
        },
        "info": "Vanhan Munkkiniemen eteläosassa sijaitsevasta Sigurd Steniuksen puistosta löytyvät tenniskentät.",
        "location": {
            "latitude": 60.189934,
            "longitude": 24.874775
        },
        "name": "Sigurd Steniuksen puisto",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/249x139.png/5fa2dd/ffffff"
        ],
        "type": "Sight"
    },
    {
        "_id": 4,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "5278875664",
            "postalCode": "00340",
            "street": "Pyhän Laurin puisto, Kuusisaarentie"
        },
        "info": "Sijaitsee Lehtisaaressa.",
        "location": {
            "latitude": 60.182219,
            "longitude": 24.854347
        },
        "name": "Pyhän Laurin puisto",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/246x209.png/cc0000/ffffff"
        ],
        "type": "Sight"
    },
    {
        "_id": 5,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "3008261222",
            "postalCode": "00330",
            "street": "Gert Skytten puisto"
        },
        "info": "Munkkiniemessä on Gert Skytten puisto, jossa on sankarihautoja sekä Wäinö Aaltosen patsas ”Maaemo suojelee poikaansa”",
        "location": {
            "latitude": 60.192481,
            "longitude": 24.877514
        },
        "name": "Gert Skytten puisto",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/160x167.bmp/ff4444/ffffff"
        ],
        "type": "Sight"
    },
    {
        "_id": 6,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "2955312352",
            "postalCode": "00340",
            "street": "Hi_idenkiukaanpuisto, Lehtisaarentie"
        },
        "info": "Sijaitsee Lehtisaaressa. Sisältää leikkipaikan.",
        "location": {
            "latitude": 60.177419,
            "longitude": 24.850298
        },
        "name": "Hi_idenkiukaanpuisto",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/173x178.bmp/5fa2dd/ffffff"
        ],
        "type": "Sight"
    },
    {
        "_id": 7,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "8599059637",
            "postalCode": "00200",
            "street": "Ruukinlahdenpuisto"
        },
        "info": "Lauttasaaressa, Länsiväylän vieressä ja lähellä metroasemaa.",
        "location": {
            "latitude": 60.162012,
            "longitude": 24.871254
        },
        "name": "Ruukinlahden puisto",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/169x179.bmp/cc0000/ffffff"
        ],
        "type": "Sight"
    },
    {
        "_id": 8,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "8849760904",
            "postalCode": "00180",
            "street": "Itämerenkatu 14"
        },
        "info": "Ruoholahden metroasema (ruots. Gräsvikens metrostation) on yksi Helsingin metron asemista. Se oli yli 24 vuoden ajan kaupungin metrolinjauksen läntinen päätepiste, kunnes länsimetron 1. vaihe valmistui ja metroliikenne Matinkylään alkoi 18. marraskuuta 2017.",
        "location": {
            "latitude": 60.163113,
            "longitude": 24.914211
        },
        "name": "Ruoholahden asema",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/164x173.jpg/cc0000/ffffff"
        ],
        "type": "Service"
    },
    {
        "_id": 9,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "4075508542",
            "postalCode": "00250",
            "street": "Seurasaarentie 15"
        },
        "info": "Ravintola Seurasaari on Helsingin Seurasaaressa sijaitseva ravintola, joka on perustettu vuonna 1873. Ravintolan rakennuksen on suunnitellut Frithiof Mieritz vuonna 1890 ja se oli kansanpuistoaikaisen Seurasaaren ensimmäinen rakennus. Nykyään ravintolan terassilla toimii myös kahvila.",
        "location": {
            "latitude": 60.18123,
            "longitude": 24.88333
        },
        "name": "Ravintola Seurasaari",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/181x138.bmp/cc0000/ffffff"
        ],
        "type": "Food"
    },
    {
        "_id": 10,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "7109369343",
            "postalCode": "00250",
            "street": "Maila Talvion puisto, Mäntyniementie"
        },
        "info": "Puistossa on veistos Itämeren tytär / Maila Talvion muistomerkki",
        "location": {
            "latitude": 60.186352,
            "longitude": 24.895579
        },
        "name": "Maila Talvion puisto",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/169x247.bmp/ff4444/ffffff"
        ],
        "type": "Sight"
    },
    {
        "_id": 11,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "8021487315",
            "postalCode": "00250",
            "street": "Toivo Kuulan puisto, Merikannontie"
        },
        "info": "Puistossa on Toivo Kuulan muistomerkki.",
        "location": {
            "latitude": 60.177798,
            "longitude": 24.912689
        },
        "name": "Toivo Kuulan puisto",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/156x111.bmp/cc0000/ffffff"
        ],
        "type": "Sight"
    },
    {
        "_id": 12,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "9189469235",
            "postalCode": "00250",
            "street": "Tamminiementie 3"
        },
        "info": "Tervetuloa nauttimaan kulttuurihistoriallisesta miljööstä viehättävässä, vuonna 1901 valmistuneessa huvilassa, aivan Seurasaaren sillan kupeessa. Vanha romanttinen huvilatyyli houkuttelee rauhoittumaan ja hiljentymään kahvi- tai teekupin ja herkullisten leivonnaisten äärelle.  Kahvilassamme on tarjolla mm. harvinaisia teelaatuja ja itse tehtyjä kakkuja sekä piiraita.",
        "location": {
            "latitude": 60.18997,
            "longitude": 24.884998
        },
        "name": "Villa Angelica",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
        ],
        "type": "Sight"
    },
    {
        "_id": 13,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "0207879720",
            "postalCode": "00100",
            "street": "Hiekkarannantie 11"
        },
        "info": "Hietarannan Bistro Badenbaden sijaitsee legendaarisella uimarannalla. Rantaravintola palvelee kesäaikaan päivittäin aamusta iltamyöhään, herkullisesti! Palvelemme tilausravintolana 30.4.2018 asti.",
        "location": {
            "latitude": 60.173437,
            "longitude": 24.905553
        },
        "name": "Bistro Badenbaden",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
        ],
        "type": "Food"
    },
    {
        "_id": 14,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "0102928090",
            "postalCode": "00100",
            "street": "Mechelininkatu 13"
        },
        "info": "The coolest bar in Töölö district at Helsinki. Restaurant, living room for those bypassers or friends who take their own paths, a very peculiar phenomenon in town for urban hikers. Good price-quality ratio for the urban adventurers. Self-made Fun Food, relaxed and warm, with a feeling of togetherness. For a huge thirst and a small appetite – Bar Favela. Dogs are also welcome!",
        "location": {
            "latitude": 60.171955,
            "longitude": 24.920383
        },
        "name": "Bar Favela",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
        ],
        "type": "Food"
    },
    {
        "_id": 15,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "050 4117792",
            "postalCode": "00100",
            "street": "Runeberginkatu 26"
        },
        "info": "Kalaravintolat ovat todellisia olutravintoloita - löydät olutmaailman erikoisuuksia sekä kausihanaoluen, joka vaihtuu Kuusi kertaa vuodessa. Jos olutmaailma ei ole sinulle tuttu, kalaravintolo_iden henkilökunta opastaa ja neuvoo tarvittaessa - kysy rohkeasti!",
        "location": {
            "latitude": 60.174319,
            "longitude": 24.921939
        },
        "name": "Vastarannan Kiiski",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
        ],
        "type": "Food"
    },
    {
        "_id": 16,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "094544303",
            "postalCode": "00100",
            "street": "Museokatu 29"
        },
        "info": "Aito on pieni ja intiimi vuonna 2009 avattu mutkattoman palvelun kortteliravintola Helsingin Töölössä. Tarjoilemme vieraillemme puhtaista ja tuoreista raaka-aineista valmistettua konstailematonta ja rehtiä ruokaa sekä sydämellistä ja ystävällistä palvelua, unohtamatta rentoa ja välitöntä tunnelmaa.",
        "location": {
            "latitude": 60.175616,
            "longitude": 24.920922
        },
        "name": "Ravintola Aito",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
        ],
        "type": "Food"
    },
    {
        "_id": 17,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "0961285200",
            "postalCode": "00100",
            "street": "Hesperiankatu 22"
        },
        "info": "Elite on Suomen oloissa ainutlaatuinen kulttuuri- ja taiteilijaravintola – elämän estradi ja taiteilijo_iden olohuone vuodesta 1932. Tässä oikean elämän teatterissa ovat viihtyneet niin näyttelijät kuin muusikot, kirjailijat ja tanssijat, ja myös kuvataiteilijat, jo_iden teokset nyt koristavat Eliten seiniä. Tunnelmallisessa ravintolasalissa ja perinteisessä baarissa on mukava viivähtää. Kesällä asiakkaita palvelee vehreä terassi.",
        "location": {
            "latitude": 60.176569,
            "longitude": 24.922915
        },
        "name": "Elite",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
        ],
        "type": "Food"
    },
    {
        "_id": 18,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "097335770",
            "postalCode": "00260",
            "street": "Merikannontie 2"
        },
        "info": "Perinteikäs ravintola Mestaritalli sijaitsee aivan meren rannalla, hyvien kulkuyhteyksien varrella Helsingin Töölössä, Toivo Kuulan puistossa. Kesäkaudella Mestaritallissa nautitaan maistuvasta lounas- ja salaattibuffetista, ja ravintola on oiva valinta myös illalliselle. Juuri remonto_idun ravintolan tunnelmalliset puitteet kruunaavat tärkeimmänkin illan ja isolta terassilta voi ihailla kesäillan auringon viimeisiä säteitä. ",
        "location": {
            "latitude": 60.178109,
            "longitude": 24.912395
        },
        "name": "Mestaritalli",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
        ],
        "type": "Food"
    },
    {
        "_id": 19,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "0400760049",
            "postalCode": "00260",
            "street": "Merikannontie 8"
        },
        "info": "Punainen tupa ja perunamaa Helsingin Töölössä, Sibeliuspuiston ja soutustadionin välissä, meren rannalla. Uunituoretta korvapuustia ja maalaisromanttista tunnelmaa tarjolla ympäri vuoden, tervetuloa!. Myynnissä makkaraa ja pihalla avotuli! Huomaathan, että omien evä_iden tuominen kahvilan alueelle on kielletty.",
        "location": {
            "latitude": 60.18017,
            "longitude": 24.911744
        },
        "name": "Regatta",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
        ],
        "type": "Food"
    },
    {
        "_id": 20,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "0207590302",
            "postalCode": "00250",
            "street": "Topeliuksenkatu 8"
        },
        "info": "Lounaskahvila",
        "location": {
            "latitude": 60.183979,
            "longitude": 24.917791
        },
        "name": "Café Picnic Topeliuksenkatu",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
        ],
        "type": "Food"
    },
    {
        "_id": 21,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "0504001966",
            "postalCode": "00250",
            "street": "Linnankoskenkatu 12"
        },
        "info": "Janoinen Lohi on maineikas olutravintola Linnankoskenkadun ja Topeliuksenkadun kulmassa. Tunnelmallinen ja rauhallinen ilmapiiri luo mukavat puitteet myös erilaisille juhlille ja tapahtumille – joita täällä järjestetäänkin pienemmistäkin syistä!",
        "location": {
            "latitude": 60.185034,
            "longitude": 24.916984
        },
        "name": "Janoinen Lohi",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
        ],
        "type": "Food"
    },
    {
        "_id": 22,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "0207716190",
            "postalCode": "00101",
            "street": "Topeliuksenkatu 21"
        },
        "info": "Pizzeria",
        "location": {
            "latitude": 60.184475,
            "longitude": 24.917648
        },
        "name": "Kotipizza",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
        ],
        "type": "Food"
    },
    {
        "_id": 23,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "0945812240",
            "postalCode": "00330",
            "street": "Kalastajatorpantie 4"
        },
        "info": "Ravintola.",
        "location": {
            "latitude": 60.192606,
            "longitude": 24.872323
        },
        "name": "Restaurant Meritorppa",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
        ],
        "type": "Food"
    },
    {
        "_id": 24,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "0504434391",
            "postalCode": "00340",
            "street": "Lehtisaarentie 1"
        },
        "info": "Lähi-_idänravintola paikassa Helsinki",
        "location": {
            "latitude": 60.180627,
            "longitude": 24.849885
        },
        "name": "Old Jerusalem",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
        ],
        "type": "Food"
    },
    {
        "_id": 25,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "0207424260",
            "postalCode": "00200",
            "street": "Gyldenintie 6"
        },
        "info": "Ravintola Casa Maressa lämpimän kodikas ja tuttavallisen välitön tunnelma tervehtii sisääntulijaa jo ovelta. Kutsumme sinut istahtamaan hyvän ruoan, virkistävän juoman ja iloisen seuran pariin kaupunkia kotoisampaan miljööseen. Olemme Helsingin Lauttasaaressa sijaitseva, helposti lähestyttävä ravintola, joka huomioi myös perheen pienimmät - ota siis koko perheesi mukaan nauttimaan ikimuistoisesta ravintolakäynnistä!",
        "location": {
            "latitude": 60.160346,
            "longitude": 24.877188
        },
        "name": "Casa Mare",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
        ],
        "type": "Food"
    },
    {
        "_id": 26,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "0503265955",
            "postalCode": "00200",
            "street": "Gyldenintie 2"
        },
        "info": "Bar Iso Majakka – Sporttia, bilistä ja rentoa meininkiä. Bar Iso Majakka on uusi sporttihenkinen baari Helsingin Lauttasaaressa. Meillä näet urheilutapahtumat isolta screeniltä ja väliajat kuluvat mukavasti bilistä pelatessa.",
        "location": {
            "latitude": 60.158409,
            "longitude": 24.876566
        },
        "name": "Bar Iso Majakka",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
        ],
        "type": "Food"
    },
    {
        "_id": 27,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "0104249830",
            "postalCode": "00180",
            "street": "Kellosaarenranta 2"
        },
        "info": "Faro Ravintola sijaitsee huikealla paikalla meren äärellä keskellä urbaania asuinaluetta. Olemassa oleva tila antoi todella hyvät puitteet uudenlaiselle tilankäytölle. Alkuperäinen ravintolasali jaettiin neljään erilaiseen tilaan, joista jokaisesta on näkymä merelle. Halusimme paikasta rennon, lämmintunnelmaisen ja helposti lähestyttävän.",
        "location": {
            "latitude": 60.161626,
            "longitude": 24.9128
        },
        "name": "Faro Channels_ide Bar & Restaurant",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
        ],
        "type": "Food"
    },
    {
        "_id": 28,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "0207701812",
            "postalCode": "00180",
            "street": "Itämerenkatu 21"
        },
        "info": "BURGER KING®-ravintoloissa käy maailmanlaajuisesti yli 11 miljoona asiakasta päivässä. He tulevat, koska ravintolamme ovat tunnettuja siitä, että ne tarjoavat korkealaatuista, maukasta ja edullista ruokaa. Vuonna 1954 perustettu BURGER KING® on maailman toiseksi suurin hampurilaisravintolaketju. Se on alkuperäinen HOME OF THE WHOPPER®, jonka ensiluokkaiset raaka-aineet, itse kehittämämme reseptit ja perheystävällinen ruokailuympäristö ovat olleet tunnusmerkkimme jo yli 50 menestyksekästä vuotta.",
        "location": {
            "latitude": 60.163639,
            "longitude": 24.912221
        },
        "name": "Burger King Gräsviken",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
        ],
        "type": "Food"
    },
    {
        "_id": 29,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "0406493040",
            "postalCode": "00250",
            "street": "Seurasaarentie"
        },
        "info": "Kansanpuiston aikaisessa Frithiof Mieritzin suunnittelemassa Metsänvartijan talossa vuodelta 1890 voi nauttia Kahvihuone Mieritzin antimista. Tarjolla on mm. tuoreita korvapuusteja, Rönttösrouvan leipomon makeita ja suolaisia piirakoita. Kahvihuone Mieritziä voi myös vuokrata yksityistilaisuuksiin ja sieltä voi noutaa Seurasaari –esitteitä.",
        "location": {
            "latitude": 60.185854,
            "longitude": 24.88451
        },
        "name": "Kahvila Mieritz",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
        ],
        "type": "Food"
    },
    {
        "_id": 30,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "0407312321",
            "postalCode": "00250",
            "street": "Mäntyniementie 4"
        },
        "info": "ravintola",
        "location": {
            "latitude": 60.186,
            "longitude": 24.896984
        },
        "name": "Hannele Klingberg",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
        ],
        "type": "Food"
    },
    {
        "_id": 31,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "0947172551",
            "postalCode": "00290",
            "street": "Haartmaninkatu 4, 00290 Helsinki"
        },
        "info": "Meilahden kukkakioski sijaitsee Meilahden tornisairaalan kahvion yhteydessä. ",
        "location": {
            "latitude": 60.188392,
            "longitude": 24.905935
        },
        "name": "Meilahden tornisairaalan kahvio ja kukkakioski",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
        ],
        "type": "Food"
    },
    {
        "_id": 32,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "0503107234",
            "postalCode": "00290",
            "street": "Haartmaninkatu 3"
        },
        "info": "Pääkaupunkiseudun suurin opiskelijaravintoloitsija, laadukas ja kokenut henkilöstöravintoloitsija. Tuemme asiakka_idemme työtä tarjoamalla maukkaita, terveellisiä ja vastuullisesti tuotettuja ravintolapalveluita.",
        "location": {
            "latitude": 60.190603,
            "longitude": 24.909157
        },
        "name": "Unicafe Meilahti",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
        ],
        "type": "Food"
    },
    {
        "_id": 33,
        "address": {
            "city": "Helsinki",
            "phoneNumber": "",
            "postalCode": "00250",
            "street": "Seurasaarentie 15"
        },
        "info": "",
        "location": {
            "latitude": 60.188437,
            "longitude": 24.884674
        },
        "name": "Tamminiemen jäätelökauppa",
        "openingHours": {
            "fri": {
                "end": "20:00",
                "start": "14:00"
            },
            "mon": {
                "end": "20:00",
                "start": "10:00"
            },
            "sat": {
                "end": "20:00",
                "start": "15:00"
            },
            "sun": {
                "end": "20:00",
                "start": "16:00"
            },
            "thu": {
                "end": "20:00",
                "start": "13:00"
            },
            "tue": {
                "end": "20:00",
                "start": "11:00"
            },
            "wed": {
                "end": "20:00",
                "start": "12:00"
            }
        },
        "picture": [
            "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
        ],
        "type": "Food"
    }
];

//Connect to mongo DB
mongoose.connect('mongodb://localhost/kohteet');

//Checks all movies
kohteet.map(data => {
	// Initializes kohde with data
  const kohde = new Kohde(data);
  // Saves kohde to our database
  kohde.save();
});
