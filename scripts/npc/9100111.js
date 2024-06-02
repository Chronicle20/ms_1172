/*
 * ChixGachapon
 * by Flav (Used for D.ChaosMS EX)
 */

//var common = Array(3010058, 3010057, 1112407, 1112408, 2040830, 2043712, 2340000, 2000000, 2000001, 2000002, 2000003, 2000004, 2000005, 2000006, 2000007, 2000008, 2000009, 2000010, 2000011, 2000012, 2002000, 2002001, 2902002, 2002003, 2002004, 2002005, 2002006, 2002007, 2002008, 2002009, 2002010, 2002011, 2002012, 2020031, 4004000, 4004001, 4004002, 4004003, 4004004, 4006000, 4006001, 4010000, 4010001, 4010002, 4010003, 4010004, 4010005, 4010006, 4010007, 4020000, 4020001, 4020002, 4020003, 4020004, 4020005, 4020006, 4020007, 4020008, 2022338, 2022339, 2022340, 2022341, 2022342, 2022343, 2022344, 2040000, 2040001, 2040002, 2040003, 2040004, 2040007, 2040008, 2040009, 2040010, 2040011, 2040012, 2040013, 2040014, 2040015, 2040016, 2040017, 2040018, 2040019, 2040020, 2040021, 2040022, 2040023, 2040024, 2040025, 2040026, 2040027, 2040028, 2040029, 2040030, 2040031, 2040100, 2040101, 2040102, 2040103, 2040104, 2040105, 2040106, 2040107, 2040108, 2040109, 2040200, 2040201, 2040202, 2040203, 2040204, 2040205, 2040206, 2040207, 2040208, 2040209, 2040300, 2040301, 2040302, 2040303, 2040304, 2040305, 2040306, 2040307, 2040308, 2040309, 2040310, 2040311, 2040312, 2040313, 2040314, 2040315, 2040316, 2040317, 2040318, 2040319, 2040320, 2040321, 2040322, 2040323, 2040324, 2040325, 2040326, 2040327, 2040328, 2040400, 2040401, 2040402, 2040404, 2040405, 2040406, 2040407, 2040408, 2040409, 2040410, 2040411, 2040412, 2040413, 2040414, 2040415, 2040416, 2040417, 2040418, 2040419, 2040420, 2040421, 2040422, 2040423, 2040424, 2040425, 2040426, 2040427, 2040500, 2040501, 2040502, 2040503, 2040504, 2040505, 2040507, 2040508, 2040509, 2040510, 2040511, 2040512, 2040513, 2040514, 2040515, 2040516, 2040517, 2040518, 2040519, 2040520, 2040521, 2040522, 2040523, 2040524, 2040525, 2040526, 2040527, 2040528, 2040529, 2040530, 2040531, 2040532, 2040533, 2040534, 2040600, 2040601, 2040602, 2040604, 2040605, 2040606, 2040607, 2040608, 2040609, 2040610, 2040611, 2040612, 2040613, 2040614, 2040615, 2040616, 2040617, 2040618, 2040619, 2040620, 2040621, 2040622, 2040623, 2040624, 2040625, 2040626, 2040627, 2040700, 2040701, 2040702, 2040703, 2040704, 2040705, 2040706, 2040707, 2040708, 2040712, 2040713, 2040714, 2040715, 2040716, 2040717, 2040718, 2040719, 2040720, 2040721, 2040722, 2040723, 2040727, 2040800, 2040801, 2040802, 2040803, 2040804, 2040805, 2040808, 2040809, 2040810, 2040811, 2040812, 2040813, 2040814, 2040815, 2040816, 2040817, 2040818, 2040819, 2040820, 2040821, 2040822, 2040823, 2040824, 2040825, 2040900, 2040901, 2040902, 2040904, 2040905, 2040906, 2040907, 2040908, 2040909, 2040910, 2040911, 2040912, 2040914, 2040915, 2040916, 2040917, 2040918, 2040919, 2040920, 2040921, 2040922, 2040923, 2040924, 2040925, 2040926, 2040927, 2040928, 2040929, 2040930, 2040931, 2040932, 2040933, 2041000, 2041001, 2041002, 2041003, 2041004, 2041005, 2041006, 2041007, 2041008, 2041009, 2041010, 2041011, 2041012, 2041013, 2041014, 2041015, 2041016, 2041017, 2041018, 2041019, 2041020, 2041021, 2041022, 2041023, 2041026, 2041027, 2041028, 2041029, 2041030, 2041031, 2041032, 2041033, 2041034, 2041035, 2041036, 2041037, 2041038, 2041039, 2041040, 2041041, 2041042, 2041043, 2041044, 2041045, 2041046, 2041047, 2041048, 2041049, 2041050, 2041051, 2041052, 2041053, 2041054, 2041055, 2041056, 2041057, 2041058, 2041059, 2041060, 2041061, 2041062, 2041200, 2041212, 2043000, 2043001, 2043002, 2043004, 2043005, 2043006, 2043007, 2043008, 2043009, 2043010, 2043011, 2043012, 2043013, 2043015, 2043016, 2043017, 2043018, 2043019, 2043100, 2043101, 2043102, 2043104, 2043105, 2043106, 2043107, 2043108, 2043110, 2043111, 2043112, 2043113, 2043114, 2043200, 2043201, 2043202, 2043204, 2043205, 2043206, 2043207, 2043208, 2043210, 2043211, 2043212, 2043213, 2043214, 2043300, 2043301, 2043302, 2043304, 2043305, 2043306, 2043307, 2043308, 2043700, 2043701, 2043702, 2043704, 2043705, 2043706, 2043707, 2043708, 2043800, 2043801, 2043802, 2043804, 2043805, 2043806, 2043807, 2043808, 2044000, 2044001, 2044002, 2044004, 2044005, 2044006, 2044007, 2044008, 2044010, 2044011, 2044012, 2044013, 2044014, 2044100, 2044101, 2044102, 2044104, 2044105, 2044106, 2044107, 2044108, 2044110, 2044111, 2044112, 2044113, 2044114, 2044200, 2044201, 2044202, 2044204, 2044205, 2044206, 2044207, 2044208, 2044210, 2044211, 2044212, 2044213, 2044214, 2044300, 2044301, 2044302, 2044304, 2044305, 2044306, 2044307, 2044308, 2044310, 2044311, 2044312, 2044313, 2044314, 2044400, 2044401, 2044402, 2044404, 2044405, 2044406, 2044407, 2044408, 2044410, 2044411, 2044412, 2044413, 2044414, 2044500, 2044501, 2044502, 2044504, 2044505, 2044506, 2044507, 2044508, 2044600, 2044601, 2044602, 2044604, 2044605, 2044606, 2044607, 2044608, 2044700, 2044701, 2044702, 2044704, 2044705, 2044706, 2044707, 2044708, 2044800, 2044801, 2044802, 2044803, 2044804, 2044805, 2044806, 2044807, 2044808, 2044809, 2044810, 2044900, 2044901, 2044902, 2044903, 2044904, 2044905, 2048000, 2048001, 2048002, 2048003, 2048004, 2048005, 2048006, 2048007, 2048008, 2048009, 2048010, 2048011, 2048012, 2048013, 2049000, 2049001, 2049002, 2049003, 2049100, 2370000, 2370001, 2370002, 2370003, 2370004, 2370005, 2370006, 2370007, 2370008, 2370009, 2370010, 2370011, 2370012);
//var normal = Array(2340000, 2049100, 1072361, 1072362, 1072363, 1072364, 1072365, 1052160, 1052161, 1052162, 1052163, 1052164, 1082239, 1082240, 1082241, 1082242, 1082243, 1122059, 1022082, 1132004, 1002790, 1002791, 1002792 , 1002793 , 1002794, 1002797, 2040806, 1002508, 1002509, 1002510, 1002511, 1002515, 1002516, 1002517, 1002518, 1002600, 1002601, 1002602, 1002603, 1002758, 1012098, 1012101, 1012102, 1012103, 1032040, 1032041, 1032042, 1122015, 1102166, 1102167, 1102168, 1092030, 1092045, 1092046, 1092047, 1302020, 1302030, 1302033, 1302035, 1302036, 1302058, 1302064, 1302065, 1302066, 1302067, 1312032, 1312033, 1322054, 1322055, 1332025, 1332055, 1332056, 1332057, 1372034, 1382009, 1382012, 1382039, 1382040, 1402039, 1402040, 1412011, 1412027, 1412028, 1422014, 1422029, 1422032, 1432012, 1432040, 1432041, 1442024, 1442030, 1442051, 1442052, 1452016, 1452022, 1452045, 1452046, 1462014, 1462019, 1462040, 1462041, 1472030, 1472032, 1472055, 1472056, 1482020, 1482021, 1482022, 1492020, 1492021, 1492022, 2070000, 2070001, 2070002, 2070003, 2070004, 2070005, 2070006, 2070007, 2070008, 2070009, 2070010, 2070011, 1012076, 1012077, 1012078, 1012079, 1302088, 1302089, 1302090, 1302091, 1302092, 1302093, 1302094, 1422030, 1422031, 1422036, 1432001, 1432002, 1432003, 1432004, 1432005, 1432006, 1432007, 1432008, 1432009, 1432010, 1432011, 1432015, 1432016, 1432017, 1432018, 1442012, 1442013, 1442014, 1442015, 1442016, 1442017, 1442021, 1442022, 1302024, 1302025, 1302026, 1302027, 1302028, 1302029, 4020009, 1032055, 1032056, 1032057, 1032058, 1002797, 1002800, 1052165, 1052166, 1052167, 1082244, 1082245, 1072366, 1072368, 1102021, 1102022, 1102023, 1102024, 1102025, 1102084, 1102085, 1102086, 1102087, 1102079, 1102080, 1102081, 1102082, 1102083, 1102054, 1102055, 1102056, 1102041, 1102042, 1102043, 1102176, 1102177, 1102178, 1102179, 1102180, 1102181, 1102182, 1102183, 1060127, 1060128, 1060129, 1060130, 1060131, 1060132, 1060133, 1082145, 1082146, 1082147, 1082148, 1082149, 1082150, 1082002, 1082228, 1092050, 2101025, 2101026, 2101050, 2101051, 2101052, 2101053, 2101054, 2101055, 2101056, 2101137, 2101138, 2101139, 2100008, 2100009, 2100010, 2100011, 2100012, 2100013, 2100014, 2100015, 2100016, 2100017, 2100018, 2100019, 2100000, 2330000, 2330001, 2330002, 2330003, 2330004, 2330005, 1082246, 1322062, 1002452, 1002453, 1002454, 1002455, 1002801, 1002553, 1002391, 1002392, 1002393, 1002394, 1002395, 1002419, 1002418, 1072168, 1072169, 1072170, 1072171, 1122010, 1032060, 1032061, 1032048, 1032030, 1102101, 1102102, 1102103, 1102104, 1102105, 1102106, 1122040, 1122041, 1122042, 1122043, 1122044, 1122045, 1122046, 1122047, 1122048, 1122049, 1122050, 1122051, 1122052, 1122053, 1122054, 1122055, 1122056, 1122057, 1122001, 1122002, 1122003, 1122004, 1122005, 1122006, 1122007, 1092019, 1092020, 1092021, 1092022, 1092052, 1072261, 1072262, 1072263, 1072264, 1002571, 1002572, 1002573, 1002574, 1002508, 1002509, 1002510, 1002511, 1302063, 1302106, 1302107, 2022282, 1002740, 1002741, 1052148, 1052149, 1052151, 1052152, 1072342, 1072343, 1072345, 1072346, 1102057, 1102040, 1102061, 1332000, 1332001, 1332002, 1332003, 1332004, 1332005, 1332006, 1332007, 1332008, 1332009, 1332010, 1332011, 1332012, 1332013, 1332014, 1332015, 1332016, 1332017, 1332018, 1332019, 1332020, 1332021, 1332022, 1332023, 1332024, 1332026, 1332027, 1332029, 1332030, 1332031, 1332032, 1332033, 1332034, 1332035, 1332036, 1332037, 1332038, 1332039, 1332040, 1332041, 1332042, 1332043, 1332044, 1332045, 1332046, 1332047, 1332049, 1332050, 1332051, 1332052, 1332053, 1332054, 1322000, 1322001, 1322002, 1322003, 1322004, 1322005, 1322006, 1322007, 1322008, 1322009, 1322010, 1322011, 1322012, 1322014, 1322015, 1322016, 1322017, 1322018, 1322019, 1322020, 1322021, 1322022, 1322023, 1322024, 1322025, 1322026, 1322027, 1322028, 1322029, 1322030, 1322031, 1322032, 1322033, 1322034, 1322035, 1322036, 1322037, 1322038, 1322039, 1322040, 1322041, 1322042, 1322043, 1322044, 1322045, 1322046, 1322047, 1322048, 1322049, 1322050, 1322051, 1322053, 1372000, 1372001, 1372002, 1372003, 1372004, 1372005, 1372006, 1372007, 1372008, 1372009, 1372010, 1372011, 1372012, 1372014, 1372015, 1372016, 1372017, 1372018, 1372019, 1372020, 1372021, 1372022, 1372023, 1372024, 1372025, 1372027, 1372028, 1372029, 1372030, 1382000, 1382001, 1382002, 1382003, 1382004, 1382005, 1382006, 1382007, 1382008, 1382010, 1382011, 1382013, 1382014, 1382015, 1382016, 1382017, 1382018, 1382019, 1382020, 1382021, 1382022, 1382023, 1382024, 1382025, 1382026, 1382027, 1382028, 1382029, 1382030, 1382031, 1382032, 1382033, 1382034, 1382035, 1402000, 1402001, 1402002, 1402003, 1402004, 1402005, 1402006, 1402007, 1402008, 1402009, 1402010, 1402011, 1402012, 1402013, 1402014, 1402015, 1402016, 1402017, 1402018, 1402019, 1402020, 1402021, 1402022, 1402023, 1402024, 1402025, 1402026, 1402027, 1402028, 1402029, 1402030, 1402031, 1402032, 1402033, 1402034, 1402035, 1412000, 1412001, 1412002, 1412003, 1412004, 1412005, 1412006, 1412007, 1412008, 1412009, 1412010, 1412012, 1412013, 1412014, 1412015, 1412016, 1412017, 1412018, 1412019, 1412020, 1412021, 1412022, 1412023, 1412024, 1412025, 1422000, 1422001, 1422002, 1422003, 1422004, 1422005, 1422006, 1422007, 1422008, 1422009, 1422010, 1422011, 1422012, 1422013, 1422014, 1422015, 1422016, 1422017, 1422018, 1422019, 1422020, 1422021, 1422022, 1422023, 1422024, 1422025, 1422026, 1432000, 1432001, 1432002, 1432003, 1432004, 1432005, 1432006, 1432007, 1432008, 1432009, 1432010, 1432011, 1432012, 1432013, 1432014, 1432019, 1432020, 1432021, 1432022, 1432023, 1432024, 1432025, 1432026, 1432027, 1432028, 1432030, 1432031, 1432032, 1432033, 1432034, 1432035, 1432039, 1432042, 1432043, 1432044, 1432045, 1432046, 1432048, 1442000, 1442001, 1442002, 1442003, 1442004, 1442005, 1442006, 1442007, 1442008, 1442009, 1442010, 1442011, 1442019, 1442020, 1442031, 1442032, 1442033, 1442034, 1442035, 1442036, 1442037, 1442038, 1442040, 1442041, 1442042, 1442043, 1442044, 1442046, 1442054, 1442055, 1442056, 1442057, 1442061, 1442065, 1442066, 1452000, 1452001, 1452002, 1452003, 1452004, 1452005, 1452006, 1452007, 1452008, 1452009, 1452010, 1452011, 1452012, 1452013, 1452014, 1452015, 1452016, 1452017, 1452018, 1452019, 1452020, 1452021, 1452022, 1452023, 1452025, 1452026, 1452027, 1452028, 1452029, 1452030, 1452031, 1452032, 1452033, 1452034, 1452035, 1452036, 1452038, 1452039, 1452040, 1452041, 1452042, 1462000, 1462001, 1462002, 1462003, 1462004, 1462005, 1462006, 1462007, 1462008, 1462009, 1462010, 1462011, 1462012, 1462013, 1462014, 1462015, 1462016, 1462017, 1462018, 1462019, 1462021, 1462022, 1462023, 1462024, 1462025, 1462026, 1462027, 1462028, 1462029, 1462030, 1462031, 1462032, 1462033, 1462034, 1462035, 1462036, 1462037, 1472000, 1472001, 1472002, 1472003, 1472004, 1472005, 1472006, 1472007, 1472008, 1472009, 1472010, 1472011, 1472012, 1472013, 1472014, 1472015, 1472016, 1472017, 1472018, 1472019, 1472020, 1472021, 1472022, 1472023, 1472024, 1472025, 1472026, 1472027, 1472028, 1472029, 1472030, 1472031, 1472032, 1472033, 1472034, 1472035, 1472036, 1472037, 1472038, 1472039, 1472040, 1472041, 1472042, 1472043, 1472045, 1472046, 1472047, 1472048, 1472049, 1482000, 1482001, 1482002, 1482003, 1482004, 1482005, 1482006, 1482007, 1482008, 1482009, 1482010, 1482011, 1482012, 1482013, 1482014, 1482015, 1482016, 1482017, 1482018, 1482019, 1472053, 1492000, 1492001, 1492002, 1492003, 1492004, 1492005, 1492006, 1492007, 1492008, 1492009, 1492010, 1492011, 1492012, 1492013, 1492014, 1492015, 1492016, 1492017, 1492018, 1492019);
//var rare = Array(1302081, 1312037, 1322060, 1402046, 1412033, 1422037, 1442063, 1482023, 1332073, 1332074, 1372044, 1382057, 1432047, 1452057, 1462050, 1472068, 1492023, 1072355, 1072356, 1072357, 1072358, 1072359, 1092057, 1092058, 1092059, 1052155, 1052156, 1052157, 1052158, 1052159, 1082234, 1082235, 1082236, 1082237, 1082238, 1002776, 1002777, 1002778, 1002779, 1002780, 1102172, 2044317, 2044712, 2040042, 2041200, 1112407, 1112408, 1112400, 1012070, 1012071, 1012072, 1012073, 1382060, 1442068, 1452060, 1322061, 1312038, 1332075, 1332076, 1372045, 1382059, 1402047, 1412034, 1422038, 1432049, 1472071, 1482024, 1492025, 1372035, 1372036, 1372037, 1372038, 1372039, 1372040, 1372041, 1372042, 1382045, 1382046, 1382047, 1382048, 1382049, 1382050, 1382051, 1382052, 1302098, 1302099, 1302100, 1302101, 1302059, 1312031, 1322052, 1012011, 1332023, 1332031, 1332049, 1332050, 1372032, 1382036, 1402036, 1412011, 1412026, 1422028, 1432038, 1442005, 1442008, 1442045, 1452044, 1462039, 1472051, 1472053, 1482013, 1492013, 1312012, 1312013, 1312014, 1322059, 1322062, 1322063, 1322064, 1332064, 1332065, 1332067, 1332068, 1332069, 1332070, 1332071, 1332072, 1332077, 1332078, 1332079, 1332080, 1402048, 1402049, 1402050, 1402051, 1442018, 1442026, 1442027, 1442028, 1442029, 1442030, 1442047, 1442048, 1442049, 1442050, 1442065, 1442066, 1442060, 1452052, 1462046, 1472062, 1472064, 1472065, 1472066, 1472067, 1462047, 1462048, 1462049, 1462052, 1462053, 1462054, 1462055, 1452053, 1452054, 1452055, 1452056, 1382054, 1382055, 1382056, 1302079, 3010000, 3010001, 3010002, 3010003, 3010004, 3010005, 3010006, 3010007, 3010008, 3010009, 3010010, 3010011, 3010012, 3010013, 3010014, 3010015, 3010016, 3010017, 3010018, 3010019, 3010025, 3011000, 3010040, 3010041, 3010045, 3012005, 3994096, 3994097, 3994098, 3994099, 3994100, 3010046, 3010047, 3010072, 1012011, 1012012, 1012013, 1012014, 1012015, 1012016, 1012017, 1012018, 1012019, 1012020, 1012058, 1012059, 1012060, 1012061, 1012070, 1012071, 1012072, 1012073, 1012076, 1012077, 1012078, 1012079, 1122002, 1122003, 1122004, 1122005, 1122006, 1122059, 1102165, 1072344, 1082223, 1022058, 1022060, 1032026, 1092049, 2044712, 2044612, 2044512, 2044417, 2044317, 2044217, 2044117, 2044025, 2043812, 2043712, 2043312, 2043217, 2043117, 2043023, 2041066, 2041067, 2040936, 2040829, 2040830, 2040740, 2040741, 2040742, 2040630, 2040538, 2040539, 2040430, 2040334, 2040041, 2040042, 1132000, 1132001, 1132002, 1132003, 1132004, 1002859, 1002860, 1002861, 1002858, 1002790, 1002791, 1002792, 1002793, 1002794, 1002947, 1002948, 1002949, 1022082, 1082239, 1082240, 1082241, 1082242, 1082243, 1082230, 1002390, 1002430, 1072238, 1072239, 1072338, 1072361, 1072362, 1072363, 1072364, 1072365, 1052160, 1052161, 1052162, 1052163, 1052164, 1051017, 1050018, 1050127, 1051140, 1012106, 1002550, 1002551, 1002773, 1002649, 1082163, 1082164, 1082167, 1082216, 1052072, 1052075, 1052134, 1052076, 1052071, 1072268, 1072269, 1072272, 1072273, 1072321, 2070016, 2070018, 1102000, 1102001, 1102002, 1102003, 1102004, 1102005, 1102011, 1102012, 1102013, 1102014, 1472072, 1472073, 1472074, 1472075, 2102000, 2102001, 2102002, 2102003, 2102004, 2102005, 2102006, 2102007, 2102008, 2102009, 1092018, 1092019, 1092020, 1092060, 4290000);
var common = Array(1302000, 1302000);
var normal = Array(1302000, 1302000);
var rare = Array(1302000, 1302000);

function getRandom(min, max) {
	if (min > max) {
		return(-1);
	}
	if (min == max) {
		return(min);
	}
	return(min + parseInt(Math.random() * (max - min + 1)));
}

var icommon = common[getRandom(0, common.length - 1)];
var inormal = normal[getRandom(0, normal.length - 1)];
var irare = rare[getRandom(0, rare.length - 1)];
var chance = getRandom(0, 5);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.sendOk("See you next time, when you try your luck here~!");
			cm.dispose();
			return;
		} else if (mode == 1) {
			status++;
		}
		if (status == 0) {
			cm.sendNext("Hey #h #! \r\n#bCoin Gachapon#k at your service!\r\nWhat's so special about this Gachapon? Well, I can give out awesome items that no other Gachapon shall give.\r\nWhat are the items? The entire list is out there, somewhere.\r\nI require #ba Wiz Coin#k to be used for #b1 Gach Service#k.\r\nWould you like to proceed?");
		} else if (status == 1) {
			if (cm.haveItem(4007099, 1)) {
				cm.sendYesNo("Amazing! You have at least #b1 Wiz Coin#k inside your invisible backpack.\r\nWould you like to see what comes out of my piehole?");
			} else {
				cm.sendOk("Not Impressive. You do not have at least #b1 Wiz Coin#k inside your invisible backpack.\r\nScammers like you want me to kill myself. But, thats not gonna happen anytime.");
				cm.dispose();
			}
			} else if (status == 2) {
			cm.sendOk("This NPC gives no #ritems#k yet, please wait or suggest items to be #eadded#n.");
		/*} else if (status == 2) {
			cm.gainItem(4007099, -1);
			if (chance > 0 && chance <= 2) {
				cm.gainItem(icommon, 1);
			} else if (chance >= 3 && chance <= 4) {
				cm.gainItem(inormal, 1);
			} else {
				cm.gainItem(irare, 1);
			}*/
			cm.dispose();
		}
	}
}