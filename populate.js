import mongoose from 'mongoose';
import Kohde from './models/kohde';

//This data can be added to database by running populate.js on server console.
const kohteet = [
    {
      "_id": "2",
      "address": {
        "city": "Helsinki",
        "postalCode": "00250",
        "street": "Mechelininkatu",
        "phoneNumber": "000000000"
      },
      "picture": [
        "https://fi.wikipedia.org/wiki/Tiedosto:SibeliusMonumenthelsinki2011.JPGe:Merikannontie_-_panoramio_(3).jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Sibelius-monumentin-paljastus.jpg/250px-Sibelius-monumentin-paljastus.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Jean_Sibelius_Park.jpg/1024px-Jean_Sibelius_Park.jpg"
      ],
      "location": {
        "latitude": 60.182113,
        "longitude": 24.913422
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "Sibelius-monumentti on Eila Hiltusen tekemä haponkestävästä teräksestä valmistettu veistos Helsingin Töölössä Sibeliuksen puistossa. Veistos painaa 24 tonnia, ja siinä on yli 600 putkea. Monumentti on 8,5 metriä korkea, 10,5 metriä pitkä ja 6,5 metriä syvä. Se on Helsingin suosituimpia veistoksia ja tunnetuimpia matkailunähtävyyksiä.",
      "name": "Sibeliusmonumentti",
      "type": "Nähtävyys",
      "__v": 0
    },
    {
      "_id": "1",
      "address": {
        "city": "Helsinki",
        "postalCode": "00100",
        "street": "Hiekkarannantie 11",
        "phoneNumber": "000000000"
      },
      "picture": [
        "http://www.hagerlund.net/sites/default/files/images/uimarannat/hietaranta/hietarannan_uimaranta_eli_hietsu_-_helsinki_10.jpg",
        "http://www.hagerlund.net/sites/default/files/images/uimarannat/hietaranta/hietarannan_uimaranta_eli_hietsu_-_helsinki_13.jpg",
        "http://www.hagerlund.net/sites/default/files/images/uimarannat/hietaranta/hietarannan_uimaranta_eli_hietsu_-_helsinki_15.jpg",
        "http://www.hagerlund.net/sites/default/files/images/uimarannat/hietaranta/hietarannan_uimaranta_eli_hietsu_-_helsinki_2.jpg",
        "http://www.hagerlund.net/sites/default/files/images/uimarannat/hietaranta/hietarannan_uimaranta_eli_hietsu_-_helsinki_6.jpg"
      ],
      "location": {
        "latitude": 60.173932,
        "longitude": 24.906107
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "Hietarannan uimaranta on käytännössä Helsingin kantakaupungista. Kyseessä on Helsingin suosituin ja parhaiten varusteltu uimaranta. Ranta tunnetaan myös nimillä Hietsu ja Hietaniemen uimaranta.",
      "name": "Hietaniemen uimaranta",
      "type": "Nähtävyys",
      "__v": 0
    },
    {
      "_id": "3",
      "address": {
        "city": "Helsinki",
        "postalCode": "00330",
        "street": "Gert Skytten puisto",
        "phoneNumber": "000000000"
      },
      "picture": [
        "http://dummyimage.com/249x139.png/5fa2dd/ffffff"
      ],
      "location": {
        "latitude": 60.189934,
        "longitude": 24.874775
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "Vanhan Munkkiniemen eteläosassa sijaitsevasta Sigurd Steniuksen puistosta löytyvät tenniskentät.",
      "name": "Sigurd Steniuksen puisto",
      "type": "Nähtävyys",
      "__v": 0
    },
    {
      "_id": "4",
      "address": {
        "city": "Helsinki",
        "postalCode": "01510",
        "street": "Kirkkotie 45, Vantaa",
        "phoneNumber": "5278875664"
      },
      "picture": [
        "https://commons.wikimedia.org/wiki/File:Vantaa_church_bell_tower.jpg",
        "https://commons.wikimedia.org/wiki/File:St._Lawrence_Church_in_Vantaa_-_gable.JPG",
        "https://commons.wikimedia.org/wiki/File:Pyhan_Laurin._kirkko.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Vantaa_church.jpg/250px-Vantaa_church.jpg"
      ],
      "location": {
        "latitude": 60.28315,
        "longitude": 24.986
      },
      "openingHours": {
        "mon": {
          "start": "9:00",
          "end": "15:00"
        },
        "tue": {
          "start": "9:00",
          "end": "15:00"
        },
        "wed": {
          "start": "9:00",
          "end": "15:00"
        },
        "thu": {
          "start": "9:00",
          "end": "15:00"
        },
        "fri": {
          "start": "9:00",
          "end": "15:00"
        },
        "sat": {
          "start": "9:00",
          "end": "15:00"
        },
        "sun": {
          "start": "9:00",
          "end": "15:00"
        }
      },
      "info": "Vantaan Pyhän Laurin kirkko (ruots. Helsinge kyrka S:t Lars) on keskiaikainen harmaakivikirkko Vantaalla. Se on pääkaupunkiseudun vanhin rakennus sekä Tikkurilan seurakunnan ja Vantaan ruotsinkielisen seurakunnan pääkirkko. Kirkko ympäristöineen on osa Helsingin pitäjän kirkonkylää, Etelä-Suomen parhaiten säilynyttä historiallista kirkonkylämiljöötä.",
      "name": "Pyhän Laurin kirkko",
      "type": "Nähtävyys",
      "__v": 0
    },
    {
      "_id": "5",
      "address": {
        "city": "Helsinki",
        "postalCode": "00330",
        "street": "Gert Skytten puisto",
        "phoneNumber": "3008261222"
      },
      "picture": [
        "http://dummyimage.com/160x167.bmp/ff4444/ffffff"
      ],
      "location": {
        "latitude": 60.192481,
        "longitude": 24.877514
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "Munkkiniemessä on Gert Skytten puisto, jossa on sankarihautoja sekä Wäinö Aaltosen patsas ”Maaemo suojelee poikaansa”",
      "name": "Gert Skytten puisto",
      "type": "Nähtävyys",
      "__v": 0
    },
    {
      "_id": "7",
      "address": {
        "city": "Helsinki",
        "postalCode": "00200",
        "street": "Ruukinlahdenpuisto",
        "phoneNumber": "8599059637"
      },
      "picture": [
        "http://dummyimage.com/169x179.bmp/cc0000/ffffff"
      ],
      "location": {
        "latitude": 60.162012,
        "longitude": 24.871254
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "Lauttasaaressa, Länsiväylän vieressä ja lähellä metroasemaa.",
      "name": "Ruukinlahden puisto",
      "type": "Nähtävyys",
      "__v": 0
    },
    {
      "_id": "12",
      "address": {
        "city": "Helsinki",
        "postalCode": "00250",
        "street": "Tamminiementie 3",
        "phoneNumber": "9189469235"
      },
      "picture": [
        "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
      ],
      "location": {
        "latitude": 60.18997,
        "longitude": 24.884998
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "Tervetuloa nauttimaan kulttuurihistoriallisesta miljööstä viehättävässä, vuonna 1901 valmistuneessa huvilassa, aivan Seurasaaren sillan kupeessa. Vanha romanttinen huvilatyyli houkuttelee rauhoittumaan ja hiljentymään kahvi- tai teekupin ja herkullisten leivonnaisten äärelle.  Kahvilassamme on tarjolla mm. harvinaisia teelaatuja ja itse tehtyjä kakkuja sekä piiraita.",
      "name": "Villa Angelica",
      "type": "Nähtävyys",
      "__v": 0
    },
    {
      "_id": "8",
      "address": {
        "city": "Helsinki",
        "postalCode": "00180",
        "street": "Itämerenkatu 14",
        "phoneNumber": "8849760904"
      },
      "picture": [
        "http://dummyimage.com/164x173.jpg/cc0000/ffffff"
      ],
      "location": {
        "latitude": 60.163113,
        "longitude": 24.914211
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "Ruoholahden metroasema (ruots. Gräsvikens metrostation) on yksi Helsingin metron asemista. Se oli yli 24 vuoden ajan kaupungin metrolinjauksen läntinen päätepiste, kunnes länsimetron 1. vaihe valmistui ja metroliikenne Matinkylään alkoi 18. marraskuuta 2017.",
      "name": "Ruoholahden asema",
      "type": "Palvelu",
      "__v": 0
    },
    {
      "_id": "13",
      "address": {
        "city": "Helsinki",
        "postalCode": "00100",
        "street": "Hiekkarannantie 11",
        "phoneNumber": "0207879720"
      },
      "picture": [
        "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
      ],
      "location": {
        "latitude": 60.173437,
        "longitude": 24.905553
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "Hietarannan Bistro Badenbaden sijaitsee legendaarisella uimarannalla. Rantaravintola palvelee kesäaikaan päivittäin aamusta iltamyöhään, herkullisesti! Palvelemme tilausravintolana 30.4.2018 asti.",
      "name": "Bistro Badenbaden",
      "type": "Ruoka",
      "__v": 0
    },
    {
      "_id": "6",
      "address": {
        "city": "Helsinki",
        "postalCode": "00340",
        "street": "Hiidenkiukaanpuisto, Lehtisaarentie",
        "phoneNumber": "2955312352"
      },
      "picture": [
        "http://dummyimage.com/173x178.bmp/5fa2dd/ffffff"
      ],
      "location": {
        "latitude": 60.177419,
        "longitude": 24.850298
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "Sijaitsee Lehtisaaressa. Sisältää leikkipaikan.",
      "name": "Hiidenkiukaanpuisto",
      "type": "Nähtävyys",
      "__v": 0
    },
    {
      "_id": "11",
      "address": {
        "city": "Helsinki",
        "postalCode": "00250",
        "street": "Toivo Kuulan puisto, Merikannontie",
        "phoneNumber": "8021487315"
      },
      "picture": [
        "http://dummyimage.com/156x111.bmp/cc0000/ffffff"
      ],
      "location": {
        "latitude": 60.177798,
        "longitude": 24.912689
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "Puistossa on Toivo Kuulan muistomerkki.",
      "name": "Toivo Kuulan puisto",
      "type": "Nähtävyys",
      "__v": 0
    },
    {
      "_id": "9",
      "address": {
        "city": "Helsinki",
        "postalCode": "00250",
        "street": "Seurasaarentie 15",
        "phoneNumber": "4075508542"
      },
      "picture": [
        "http://myy.haaga-helia.fi/~jusju/geopark/meritorppa.jpg"
      ],
      "location": {
        "latitude": 60.18123,
        "longitude": 24.88333
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "Ravintola Seurasaari on Helsingin Seurasaaressa sijaitseva ravintola, joka on perustettu vuonna 1873. Ravintolan rakennuksen on suunnitellut Frithiof Mieritz vuonna 1890 ja se oli kansanpuistoaikaisen Seurasaaren ensimmäinen rakennus. Nykyään ravintolan terassilla toimii myös kahvila.",
      "name": "Ravintola Seurasaari",
      "type": "Ruoka",
      "__v": 0
    },
    {
      "_id": "14",
      "address": {
        "city": "Helsinki",
        "postalCode": "00100",
        "street": "Mechelininkatu 13",
        "phoneNumber": "0102928090"
      },
      "picture": [
        "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
      ],
      "location": {
        "latitude": 60.171955,
        "longitude": 24.920383
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "The coolest bar in Töölö district at Helsinki. Restaurant, living room for those bypassers or friends who take their own paths, a very peculiar phenomenon in town for urban hikers. Good price-quality ratio for the urban adventurers. Self-made Fun Food, relaxed and warm, with a feeling of togetherness. For a huge thirst and a small appetite – Bar Favela. Dogs are also welcome!",
      "name": "Bar Favela",
      "type": "Ruoka",
      "__v": 0
    },
    {
      "_id": "10",
      "address": {
        "city": "Helsinki",
        "postalCode": "00250",
        "street": "Maila Talvion puisto, Mäntyniementie",
        "phoneNumber": "7109369343"
      },
      "picture": [
        "http://dummyimage.com/169x247.bmp/ff4444/ffffff"
      ],
      "location": {
        "latitude": 60.186352,
        "longitude": 24.895579
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "Puistossa on veistos Itämeren tytär / Maila Talvion muistomerkki",
      "name": "Maila Talvion puisto",
      "type": "Nähtävyys",
      "__v": 0
    },
    {
      "_id": "15",
      "address": {
        "city": "Helsinki",
        "postalCode": "00100",
        "street": "Runeberginkatu 26",
        "phoneNumber": "050 4117792"
      },
      "picture": [
        "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
      ],
      "location": {
        "latitude": 60.174319,
        "longitude": 24.921939
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "Kalaravintolat ovat todellisia olutravintoloita - löydät olutmaailman erikoisuuksia sekä kausihanaoluen, joka vaihtuu Kuusi kertaa vuodessa. Jos olutmaailma ei ole sinulle tuttu, kalaravintoloiden henkilökunta opastaa ja neuvoo tarvittaessa - kysy rohkeasti!",
      "name": "Vastarannan Kiiski",
      "type": "Ruoka",
      "__v": 0
    },
    {
      "_id": "17",
      "address": {
        "city": "Helsinki",
        "postalCode": "00100",
        "street": "Hesperiankatu 22",
        "phoneNumber": "0961285200"
      },
      "picture": [
        "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
      ],
      "location": {
        "latitude": 60.176569,
        "longitude": 24.922915
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "Elite on Suomen oloissa ainutlaatuinen kulttuuri- ja taiteilijaravintola – elämän estradi ja taiteilijoiden olohuone vuodesta 1932. Tässä oikean elämän teatterissa ovat viihtyneet niin näyttelijät kuin muusikot, kirjailijat ja tanssijat, ja myös kuvataiteilijat, joiden teokset nyt koristavat Eliten seiniä. Tunnelmallisessa ravintolasalissa ja perinteisessä baarissa on mukava viivähtää. Kesällä asiakkaita palvelee vehreä terassi.",
      "name": "Elite",
      "type": "Ruoka",
      "__v": 0
    },
    {
      "_id": "22",
      "address": {
        "city": "Helsinki",
        "postalCode": "00101",
        "street": "Topeliuksenkatu 21",
        "phoneNumber": "0207716190"
      },
      "picture": [
        "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
      ],
      "location": {
        "latitude": 60.184475,
        "longitude": 24.917648
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "Pizzeria",
      "name": "Kotipizza",
      "type": "Ruoka",
      "__v": 0
    },
    {
      "_id": "27",
      "address": {
        "city": "Helsinki",
        "postalCode": "00180",
        "street": "Kellosaarenranta 2",
        "phoneNumber": "0104249830"
      },
      "picture": [
        "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
      ],
      "location": {
        "latitude": 60.161626,
        "longitude": 24.9128
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "Faro Ravintola sijaitsee huikealla paikalla meren äärellä keskellä urbaania asuinaluetta. Olemassa oleva tila antoi todella hyvät puitteet uudenlaiselle tilankäytölle. Alkuperäinen ravintolasali jaettiin neljään erilaiseen tilaan, joista jokaisesta on näkymä merelle. Halusimme paikasta rennon, lämmintunnelmaisen ja helposti lähestyttävän.",
      "name": "Faro Channels Bar & Restaurant",
      "type": "Ruoka",
      "__v": 0
    },
    {
      "_id": "32",
      "address": {
        "city": "Helsinki",
        "postalCode": "00290",
        "street": "Haartmaninkatu 3",
        "phoneNumber": "0503107234"
      },
      "picture": [
        "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
      ],
      "location": {
        "latitude": 60.190603,
        "longitude": 24.909157
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "Pääkaupunkiseudun suurin opiskelijaravintoloitsija, laadukas ja kokenut henkilöstöravintoloitsija. Tuemme asiakkaidemme työtä tarjoamalla maukkaita, terveellisiä ja vastuullisesti tuotettuja ravintolapalveluita.",
      "name": "Unicafe Meilahti",
      "type": "Ruoka",
      "__v": 0
    },
    {
      "_id": "18",
      "address": {
        "city": "Helsinki",
        "postalCode": "00260",
        "street": "Merikannontie 2",
        "phoneNumber": "097335770"
      },
      "picture": [
        "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
      ],
      "location": {
        "latitude": 60.178109,
        "longitude": 24.912395
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "Perinteikäs ravintola Mestaritalli sijaitsee aivan meren rannalla, hyvien kulkuyhteyksien varrella Helsingin Töölössä, Toivo Kuulan puistossa. Kesäkaudella Mestaritallissa nautitaan maistuvasta lounas- ja salaattibuffetista, ja ravintola on oiva valinta myös illalliselle. Juuri remontoidun ravintolan tunnelmalliset puitteet kruunaavat tärkeimmänkin illan ja isolta terassilta voi ihailla kesäillan auringon viimeisiä säteitä. ",
      "name": "Mestaritalli",
      "type": "Ruoka",
      "__v": 0
    },
    {
      "_id": "23",
      "address": {
        "city": "Helsinki",
        "postalCode": "00330",
        "street": "Kalastajatorpantie 4",
        "phoneNumber": "0945812240"
      },
      "picture": [
        "http://myy.haaga-helia.fi/~jusju/geopark/meritorppa.jpg"
      ],
      "location": {
        "latitude": 60.192606,
        "longitude": 24.872323
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "Kalastajatorppa, stadin slangissa ”Fiskis”[1], on perinteikäs ravintola ja sen yhteydessä toimiva hotelli (viralliselta nimeltään Hilton Helsinki Kalastajatorppa) Helsingin Munkkiniemessä. Suurimmassa ravintolasalissa, Pyöreässä salissa, on 350 istumapaikkaa, mutta puitteet mahdollistavat jopa 1 200 hengen bankettien tai 1 800 hengen cocktailtilaisuuksien ja gaalojen järjestämisen",
      "name": "Restaurant Meritorppa",
      "type": "Ruoka",
      "__v": 0
    },
    {
      "_id": "28",
      "address": {
        "city": "Helsinki",
        "postalCode": "00180",
        "street": "Itämerenkatu 21",
        "phoneNumber": "0207701812"
      },
      "picture": [
        "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
      ],
      "location": {
        "latitude": 60.163639,
        "longitude": 24.912221
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "BURGER KING®-ravintoloissa käy maailmanlaajuisesti yli 11 miljoona asiakasta päivässä. He tulevat, koska ravintolamme ovat tunnettuja siitä, että ne tarjoavat korkealaatuista, maukasta ja edullista ruokaa. Vuonna 1954 perustettu BURGER KING® on maailman toiseksi suurin hampurilaisravintolaketju. Se on alkuperäinen HOME OF THE WHOPPER®, jonka ensiluokkaiset raaka-aineet, itse kehittämämme reseptit ja perheystävällinen ruokailuympäristö ovat olleet tunnusmerkkimme jo yli 50 menestyksekästä vuotta.",
      "name": "Burger King Gräsviken",
      "type": "Ruoka",
      "__v": 0
    },
    {
      "_id": "33",
      "address": {
        "city": "Helsinki",
        "postalCode": "00250",
        "street": "Seurasaarentie 15",
        "phoneNumber": ""
      },
      "picture": [
        "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
      ],
      "location": {
        "latitude": 60.188437,
        "longitude": 24.884674
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "",
      "name": "Tamminiemen jäätelökauppa",
      "type": "Ruoka",
      "__v": 0
    },
    {
      "_id": "16",
      "address": {
        "city": "Helsinki",
        "postalCode": "00100",
        "street": "Museokatu 29",
        "phoneNumber": "094544303"
      },
      "picture": [
        "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
      ],
      "location": {
        "latitude": 60.175616,
        "longitude": 24.920922
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "Aito on pieni ja intiimi vuonna 2009 avattu mutkattoman palvelun kortteliravintola Helsingin Töölössä. Tarjoilemme vieraillemme puhtaista ja tuoreista raaka-aineista valmistettua konstailematonta ja rehtiä ruokaa sekä sydämellistä ja ystävällistä palvelua, unohtamatta rentoa ja välitöntä tunnelmaa.",
      "name": "Ravintola Aito",
      "type": "Ruoka",
      "__v": 0
    },
    {
      "_id": "21",
      "address": {
        "city": "Helsinki",
        "postalCode": "00250",
        "street": "Linnankoskenkatu 12",
        "phoneNumber": "0504001966"
      },
      "picture": [
        "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
      ],
      "location": {
        "latitude": 60.185034,
        "longitude": 24.916984
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "Janoinen Lohi on maineikas olutravintola Linnankoskenkadun ja Topeliuksenkadun kulmassa. Tunnelmallinen ja rauhallinen ilmapiiri luo mukavat puitteet myös erilaisille juhlille ja tapahtumille – joita täällä järjestetäänkin pienemmistäkin syistä!",
      "name": "Janoinen Lohi",
      "type": "Ruoka",
      "__v": 0
    },
    {
      "_id": "26",
      "address": {
        "city": "Helsinki",
        "postalCode": "00200",
        "street": "Gyldenintie 2",
        "phoneNumber": "0503265955"
      },
      "picture": [
        "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
      ],
      "location": {
        "latitude": 60.158409,
        "longitude": 24.876566
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "Bar Iso Majakka – Sporttia, bilistä ja rentoa meininkiä. Bar Iso Majakka on uusi sporttihenkinen baari Helsingin Lauttasaaressa. Meillä näet urheilutapahtumat isolta screeniltä ja väliajat kuluvat mukavasti bilistä pelatessa.",
      "name": "Bar Iso Majakka",
      "type": "Ruoka",
      "__v": 0
    },
    {
      "_id": "31",
      "address": {
        "city": "Helsinki",
        "postalCode": "00290",
        "street": "Haartmaninkatu 4, 00290 Helsinki",
        "phoneNumber": "0947172551"
      },
      "picture": [
        "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
      ],
      "location": {
        "latitude": 60.188392,
        "longitude": 24.905935
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "Meilahden kukkakioski sijaitsee Meilahden tornisairaalan kahvion yhteydessä. ",
      "name": "Meilahden tornisairaalan kahvio ja kukkakioski",
      "type": "Ruoka",
      "__v": 0
    },
    {
      "_id": "19",
      "address": {
        "city": "Helsinki",
        "postalCode": "00260",
        "street": "Merikannontie 8",
        "phoneNumber": "0400760049"
      },
      "picture": [
        "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
      ],
      "location": {
        "latitude": 60.18017,
        "longitude": 24.911744
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "Punainen tupa ja perunamaa Helsingin Töölössä, Sibeliuspuiston ja soutustadionin välissä, meren rannalla. Uunituoretta korvapuustia ja maalaisromanttista tunnelmaa tarjolla ympäri vuoden, tervetuloa!. Myynnissä makkaraa ja pihalla avotuli! Huomaathan, että omien eväiden tuominen kahvilan alueelle on kielletty.",
      "name": "Regatta",
      "type": "Ruoka",
      "__v": 0
    },
    {
      "_id": "24",
      "address": {
        "city": "Helsinki",
        "postalCode": "00340",
        "street": "Lehtisaarentie 1",
        "phoneNumber": "0504434391"
      },
      "picture": [
        "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
      ],
      "location": {
        "latitude": 60.180627,
        "longitude": 24.849885
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "Lähi-idänravintola paikassa Helsinki",
      "name": "Old Jerusalem",
      "type": "Ruoka",
      "__v": 0
    },
    {
      "_id": "29",
      "address": {
        "city": "Helsinki",
        "postalCode": "00250",
        "street": "Seurasaarentie",
        "phoneNumber": "0406493040"
      },
      "picture": [
        "http://myy.haaga-helia.fi/~jusju/geopark/mieritz.jpg"
      ],
      "location": {
        "latitude": 60.185854,
        "longitude": 24.88451
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "Kansanpuiston aikaisessa Frithiof Mieritzin suunnittelemassa Metsänvartijan talossa vuodelta 1890 voi nauttia Kahvihuone Mieritzin antimista. Tarjolla on mm. tuoreita korvapuusteja, Rönttösrouvan leipomon makeita ja suolaisia piirakoita. Kahvihuone Mieritziä voi myös vuokrata yksityistilaisuuksiin ja sieltä voi noutaa Seurasaari –esitteitä.",
      "name": "Kahvila Mieritz",
      "type": "Ruoka",
      "__v": 0
    },
    {
      "_id": "20",
      "address": {
        "city": "Helsinki",
        "postalCode": "00250",
        "street": "Topeliuksenkatu 8",
        "phoneNumber": "0207590302"
      },
      "picture": [
        "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
      ],
      "location": {
        "latitude": 60.183979,
        "longitude": 24.917791
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "Lounaskahvila",
      "name": "Café Picnic Topeliuksenkatu",
      "type": "Ruoka",
      "__v": 0
    },
    {
      "_id": "25",
      "address": {
        "city": "Helsinki",
        "postalCode": "00200",
        "street": "Gyldenintie 6",
        "phoneNumber": "0207424260"
      },
      "picture": [
        "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
      ],
      "location": {
        "latitude": 60.160346,
        "longitude": 24.877188
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "Ravintola Casa Maressa lämpimän kodikas ja tuttavallisen välitön tunnelma tervehtii sisääntulijaa jo ovelta. Kutsumme sinut istahtamaan hyvän ruoan, virkistävän juoman ja iloisen seuran pariin kaupunkia kotoisampaan miljööseen. Olemme Helsingin Lauttasaaressa sijaitseva, helposti lähestyttävä ravintola, joka huomioi myös perheen pienimmät - ota siis koko perheesi mukaan nauttimaan ikimuistoisesta ravintolakäynnistä!",
      "name": "Casa Mare",
      "type": "Ruoka",
      "__v": 0
    },
    {
      "_id": "30",
      "address": {
        "city": "Helsinki",
        "postalCode": "00250",
        "street": "Mäntyniementie 4",
        "phoneNumber": "0407312321"
      },
      "picture": [
        "http://dummyimage.com/137x234.jpg/5fa2dd/ffffff"
      ],
      "location": {
        "latitude": 60.186,
        "longitude": 24.896984
      },
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "20:00"
        },
        "tue": {
          "start": "11:00",
          "end": "20:00"
        },
        "wed": {
          "start": "12:00",
          "end": "20:00"
        },
        "thu": {
          "start": "13:00",
          "end": "20:00"
        },
        "fri": {
          "start": "14:00",
          "end": "20:00"
        },
        "sat": {
          "start": "15:00",
          "end": "20:00"
        },
        "sun": {
          "start": "16:00",
          "end": "20:00"
        }
      },
      "info": "ravintola",
      "name": "Hannele Klingberg",
      "type": "Ruoka",
      "__v": 0
    },
    {
      "_id": "5a8586dd90dc555c36241e5a",
      "__v": 0,
      "info": "Kun Pyhän Olavin linnaa vuonna 1475 alettiin rakentaa, päätti linnan perustaja, tanskalaissyntyinen ritari Erik Akselinpoika Tott rakennuttaa mahtavan linnoituksen strategisesti tärkeän Savon alueen turvaksi. Linnan tehtävänä oli torjua idästä tulevat venäläisten hyökkäykset ja täten varmistaa Savon seudun herruuden säilyminen Ruotsin kruunulla. Olavinlinnan historia onkin sekoitus keskiajan miekan kalsketta, tykin jylinää ja arkisia askareita linnan jykevien muurien suojissa.\r\n\r\nVallanvaihdokset ovat antaneet Olavinlinnalle oman leimansa, joka yhä on nähtävissä linnan moni-ilmeisessä arkkitehtuurissa. Tänä päivänä linnan juhlatilat ovat vuokrattavissa ja toimivat monien erilaisten tilaisuuksien pitopaikkana.",
      "name": "Olavinlinna",
      "type": "Nähtävyys",
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "16:00"
        },
        "tue": {
          "start": "10:00",
          "end": "16:00"
        },
        "wed": {
          "start": "10:00",
          "end": "16:00"
        },
        "thu": {
          "start": "10:00",
          "end": "16:00"
        },
        "fri": {
          "start": "10:00",
          "end": "16:00"
        },
        "sat": {
          "start": "11:00",
          "end": "16:00"
        },
        "sun": {
          "start": "11:00",
          "end": "16:00"
        }
      },
      "location": {
        "latitude": 61.8639817,
        "longitude": 28.9010811
      },
      "picture": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Olavinlinna2.jpg/265px-Olavinlinna2.jpg"
      ],
      "address": {
        "city": "Savonlinna",
        "postalCode": "57130",
        "street": "-",
        "phoneNumber": "0295 33 6941"
      }
    },
    {
      "_id": "5a858a2990dc555c36241e5b",
      "__v": 0,
      "info": "Turun linna on 1200-luvun lopussa Aurajoen suulle perustettu linna Turussa. Se perustettiin alun perin Ruotsin kruunun hallintolinnaksi, mutta myöhemmin siitä tuli muun muassa Juhana III:n herttua-ajan renessanssilinna, Suomen kenraalikuvernöörin virka-asunto ja vankila. 1800-luvun lopulta alkaen linna on toiminut museokäytössä, joskin se vaurioitui pahoin Neuvostoliiton ilmavoimien pommituksessa kesällä 1941. Tämän seurauksena linnassa jouduttiin tekemään toisen maailmansodan jälkeen laajoja korjaus- ja restaurointitöitä.",
      "name": "Turun Linna",
      "type": "Nähtävyys",
      "openingHours": {
        "mon": {
          "start": "",
          "end": "18:00"
        },
        "tue": {
          "start": "",
          "end": "18:00"
        },
        "wed": {
          "start": "",
          "end": "18:00"
        },
        "thu": {
          "start": "",
          "end": "18:00"
        },
        "fri": {
          "start": "",
          "end": "18:00"
        },
        "sat": {
          "start": "",
          "end": "18:00"
        },
        "sun": {
          "start": "",
          "end": "18:00"
        }
      },
      "location": {
        "latitude": 60.435332,
        "longitude": 22.227984
      },
      "picture": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Turkucastle_edit.jpg/240px-Turkucastle_edit.jpg"
      ],
      "address": {
        "city": "Turku",
        "postalCode": "20100",
        "street": "Linnankatu 80",
        "phoneNumber": " (02) 262 0300"
      }
    },
    {
      "_id": "5a858c1190dc555c36241e5c",
      "__v": 0,
      "info": "Suomenlinna (ruots. Sveaborg) on Helsingin edustalla sijaitseva merilinnoitus. Historiallisena muistomerkkinä ja nähtävyytenä sen kulttuurillinen arvo on merkittävä, ja se on vahva osa Helsingin identiteettiä. Suomenlinnan rakennustyöt aloitettiin vuonna 1748 ja se tunnettiin vuoteen 1918 asti ruotsinkielisen nimensä Sveaborg pohjalta suomeksi Viaporina. Suomenlinna liitettiin vuonna 1991 Unescon maailmanperintöluetteloon. ",
      "name": "Suomenlinna",
      "type": "Nähtävyys",
      "openingHours": {
        "mon": {
          "start": "10:30",
          "end": "16:30"
        },
        "tue": {
          "start": "10:30",
          "end": "16:30"
        },
        "wed": {
          "start": "10:30",
          "end": "16:30"
        },
        "thu": {
          "start": "10:30",
          "end": "16:30"
        },
        "fri": {
          "start": "10:30",
          "end": "16:30"
        },
        "sat": {
          "start": "10:30",
          "end": "16:30"
        },
        "sun": {
          "start": "10:30",
          "end": "16:30"
        }
      },
      "location": {
        "latitude": 60.143611,
        "longitude": 24.984444
      },
      "picture": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Guns_of_Suomenlinna.jpg/220px-Guns_of_Suomenlinna.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Ehrensv%C3%A4rd%27s_Grave.JPG/240px-Ehrensv%C3%A4rd%27s_Grave.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Suomenlinna_aerial.JPG/250px-Suomenlinna_aerial.JPG"
      ],
      "address": {
        "city": "Helsinki",
        "postalCode": "00190",
        "street": "-",
        "phoneNumber": " (02) 262 0300"
      }
    },
    {
      "_id": "5a96e6209f20d27b31aa4e25",
      "__v": 0,
      "info": "Uljaan tila on Askolan Vakkolassa sijaitseva mansikka- ja pensasmustikkatila.",
      "name": "Uljaan tila",
      "type": "Palvelu",
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "16:00"
        },
        "tue": {
          "start": "10:00",
          "end": "16:00"
        },
        "wed": {
          "start": "10:00",
          "end": "16:00"
        },
        "thu": {
          "start": "10:00",
          "end": "16:00"
        },
        "fri": {
          "start": "10:00",
          "end": "16:00"
        },
        "sat": {
          "start": "10:00",
          "end": "16:00"
        },
        "sun": {
          "start": "",
          "end": ""
        }
      },
      "location": {
        "latitude": 60.523086,
        "longitude": 25.649085
      },
      "picture": [
        "https://uljaantila.fi/uploads/images/navetta.jpg",
        "https://uljaantila.fi/uploads/images/pelto.jpg"
      ],
      "address": {
        "city": "Askola",
        "postalCode": "07500",
        "street": "Yhdystie 276",
        "phoneNumber": ""
      }
    },
    {
      "_id": "5a96e7669f20d27b31aa4e26",
      "__v": 0,
      "info": "Taianomainen kartanomiljöö - Hyvää ruokaa suoraan tilalta, kotiovelle toimitettuna. Bosgårdista löydät luomunaudanlihaa, tilakaupan, kesäravintolan, herkullisia ruoka-annoksia ja virkistäviä elämyksiä. Charolais-lihakarjamme laiduntaa tilan arvokkailla perinnemaisemilla ja Pikkupernajalahden Natura-alueella. Olemme nykyaikanen, moderni ja monipuolinen tila. Sijaitsemme 10 minuutin ajomatkan päässä Porvoon keskustasta. Tervetuloa tutustumaan",
      "name": "Bosgårdin tilakauppa ja ravintola",
      "type": "Palvelu",
      "openingHours": {
        "mon": {
          "start": "10:00",
          "end": "16:00"
        },
        "tue": {
          "start": "10:00",
          "end": "16:00"
        },
        "wed": {
          "start": "10:00",
          "end": "16:00"
        },
        "thu": {
          "start": "10:00",
          "end": "16:00"
        },
        "fri": {
          "start": "10:00",
          "end": "16:00"
        },
        "sat": {
          "start": "10:00",
          "end": "16:00"
        },
        "sun": {
          "start": "sopimuksen mukaan",
          "end": ""
        }
      },
      "location": {
        "latitude": 60.405544,
        "longitude": 25.83506
      },
      "picture": [
        "https://dummyimage.com/169x179.bmp/cc0000/ffffff"
      ],
      "address": {
        "city": "Porvoo",
        "postalCode": "06200",
        "street": "Bosgårdintie 68",
        "phoneNumber": ""
      }
    }
];

//Connect to mongo DB
mongoose.connect('mongodb://localhost/kohteet');

//Checks all destinations
kohteet.map(data => {
	// Initializes kohde with data
  const kohde = new Kohde(data);
  // Saves destination to our database
  kohde.save();
});

