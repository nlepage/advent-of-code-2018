const input = `#1 @ 872,519: 18x18
#2 @ 309,394: 15x21
#3 @ 655,494: 12x23
#4 @ 298,689: 12x25
#5 @ 88,316: 20x10
#6 @ 461,76: 10x17
#7 @ 413,502: 19x29
#8 @ 440,834: 19x24
#9 @ 964,907: 21x23
#10 @ 398,72: 12x19
#11 @ 260,39: 17x12
#12 @ 410,568: 27x24
#13 @ 220,304: 28x21
#14 @ 921,334: 17x24
#15 @ 203,366: 13x14
#16 @ 123,904: 24x28
#17 @ 361,924: 15x25
#18 @ 63,475: 16x23
#19 @ 856,389: 27x22
#20 @ 805,35: 15x27
#21 @ 544,395: 29x18
#22 @ 597,522: 17x18
#23 @ 202,885: 16x12
#24 @ 546,636: 28x21
#25 @ 872,224: 28x24
#26 @ 5,649: 25x10
#27 @ 446,895: 20x28
#28 @ 447,764: 22x17
#29 @ 797,721: 22x22
#30 @ 262,528: 27x16
#31 @ 381,531: 11x23
#32 @ 672,580: 11x25
#33 @ 885,889: 29x24
#34 @ 830,749: 28x23
#35 @ 484,635: 16x14
#36 @ 693,619: 18x21
#37 @ 246,652: 12x27
#38 @ 760,346: 12x4
#39 @ 667,154: 23x16
#40 @ 58,695: 24x11
#41 @ 662,250: 19x17
#42 @ 401,950: 3x4
#43 @ 529,596: 29x23
#44 @ 71,768: 18x27
#45 @ 474,562: 11x26
#46 @ 328,100: 15x24
#47 @ 825,386: 24x21
#48 @ 564,706: 13x18
#49 @ 347,152: 17x26
#50 @ 827,921: 29x14
#51 @ 580,230: 10x15
#52 @ 929,459: 12x28
#53 @ 48,841: 18x29
#54 @ 383,356: 29x26
#55 @ 921,38: 27x24
#56 @ 895,382: 20x23
#57 @ 676,91: 12x24
#58 @ 687,10: 14x22
#59 @ 352,189: 25x26
#60 @ 578,500: 29x21
#61 @ 248,32: 16x15
#62 @ 158,950: 17x19
#63 @ 193,726: 17x20
#64 @ 213,673: 23x18
#65 @ 633,739: 14x10
#66 @ 482,741: 11x27
#67 @ 143,670: 17x22
#68 @ 397,889: 22x28
#69 @ 855,733: 14x27
#70 @ 12,537: 12x4
#71 @ 32,65: 12x25
#72 @ 527,755: 14x29
#73 @ 560,69: 20x22
#74 @ 550,257: 11x29
#75 @ 65,46: 25x11
#76 @ 661,767: 25x23
#77 @ 236,252: 17x28
#78 @ 950,964: 17x17
#79 @ 304,746: 11x13
#80 @ 818,320: 29x23
#81 @ 509,370: 24x29
#82 @ 344,949: 10x28
#83 @ 22,636: 24x25
#84 @ 237,50: 26x27
#85 @ 353,950: 23x24
#86 @ 177,425: 20x22
#87 @ 374,122: 29x19
#88 @ 606,383: 20x13
#89 @ 162,935: 21x19
#90 @ 129,460: 23x12
#91 @ 169,207: 20x10
#92 @ 209,883: 12x27
#93 @ 718,379: 12x15
#94 @ 79,656: 17x25
#95 @ 933,492: 25x24
#96 @ 387,891: 21x22
#97 @ 360,312: 29x23
#98 @ 737,879: 29x28
#99 @ 969,337: 24x17
#100 @ 737,135: 22x20
#101 @ 278,798: 26x24
#102 @ 71,837: 29x14
#103 @ 34,620: 20x26
#104 @ 509,787: 20x23
#105 @ 586,245: 21x27
#106 @ 779,126: 24x27
#107 @ 571,197: 15x22
#108 @ 592,431: 13x22
#109 @ 834,30: 18x19
#110 @ 745,618: 16x28
#111 @ 89,31: 14x16
#112 @ 54,529: 22x29
#113 @ 900,906: 28x15
#114 @ 119,818: 15x13
#115 @ 200,865: 18x15
#116 @ 953,158: 12x15
#117 @ 606,65: 13x14
#118 @ 481,505: 14x22
#119 @ 317,201: 14x25
#120 @ 246,771: 15x15
#121 @ 277,269: 23x16
#122 @ 686,1: 19x17
#123 @ 388,162: 24x17
#124 @ 945,671: 27x14
#125 @ 599,504: 23x22
#126 @ 927,725: 13x25
#127 @ 468,513: 15x20
#128 @ 556,325: 13x19
#129 @ 526,273: 13x15
#130 @ 123,245: 18x13
#131 @ 191,869: 11x21
#132 @ 954,648: 11x27
#133 @ 962,963: 19x15
#134 @ 768,127: 11x23
#135 @ 814,365: 10x22
#136 @ 349,748: 24x29
#137 @ 345,553: 21x18
#138 @ 401,888: 14x20
#139 @ 342,879: 19x16
#140 @ 248,707: 23x25
#141 @ 559,707: 11x15
#142 @ 778,93: 12x26
#143 @ 690,904: 21x25
#144 @ 358,92: 28x12
#145 @ 618,591: 19x22
#146 @ 727,834: 27x29
#147 @ 401,219: 14x13
#148 @ 791,443: 10x25
#149 @ 633,248: 26x17
#150 @ 231,660: 25x24
#151 @ 935,121: 12x24
#152 @ 177,935: 23x23
#153 @ 822,778: 20x21
#154 @ 972,929: 26x13
#155 @ 87,957: 23x18
#156 @ 663,595: 19x27
#157 @ 523,819: 19x19
#158 @ 209,714: 22x19
#159 @ 644,216: 14x8
#160 @ 459,794: 12x14
#161 @ 560,926: 26x21
#162 @ 200,860: 11x13
#163 @ 535,250: 18x28
#164 @ 246,436: 19x12
#165 @ 100,7: 19x13
#166 @ 927,325: 27x29
#167 @ 512,160: 21x28
#168 @ 647,858: 14x19
#169 @ 45,646: 26x16
#170 @ 48,55: 10x21
#171 @ 520,608: 17x20
#172 @ 676,64: 26x26
#173 @ 668,51: 22x22
#174 @ 268,323: 20x26
#175 @ 626,798: 11x14
#176 @ 595,47: 25x28
#177 @ 703,655: 18x25
#178 @ 701,900: 15x28
#179 @ 907,336: 26x10
#180 @ 801,327: 19x23
#181 @ 378,444: 28x16
#182 @ 205,123: 5x17
#183 @ 903,595: 21x25
#184 @ 767,138: 23x21
#185 @ 963,370: 14x23
#186 @ 685,508: 28x24
#187 @ 425,609: 14x19
#188 @ 643,312: 19x29
#189 @ 263,409: 28x24
#190 @ 194,604: 12x26
#191 @ 956,812: 27x11
#192 @ 346,777: 18x16
#193 @ 417,0: 26x11
#194 @ 537,213: 27x24
#195 @ 257,523: 24x16
#196 @ 240,448: 23x16
#197 @ 440,761: 10x24
#198 @ 76,20: 26x11
#199 @ 778,205: 24x24
#200 @ 107,752: 22x19
#201 @ 366,626: 14x10
#202 @ 342,695: 24x19
#203 @ 67,925: 29x13
#204 @ 267,615: 13x24
#205 @ 530,595: 10x20
#206 @ 219,967: 15x21
#207 @ 351,76: 10x20
#208 @ 585,236: 27x13
#209 @ 323,548: 25x20
#210 @ 270,337: 29x22
#211 @ 257,425: 27x18
#212 @ 670,304: 18x11
#213 @ 252,652: 27x12
#214 @ 567,413: 25x10
#215 @ 117,696: 19x17
#216 @ 925,914: 27x23
#217 @ 394,343: 14x10
#218 @ 661,166: 10x21
#219 @ 469,920: 29x12
#220 @ 54,400: 17x24
#221 @ 814,184: 18x3
#222 @ 205,260: 16x28
#223 @ 810,181: 26x12
#224 @ 265,342: 14x15
#225 @ 785,674: 16x24
#226 @ 810,515: 13x28
#227 @ 767,861: 11x26
#228 @ 277,296: 24x16
#229 @ 20,555: 14x10
#230 @ 591,806: 14x11
#231 @ 96,568: 11x27
#232 @ 387,447: 16x24
#233 @ 333,696: 22x23
#234 @ 890,598: 25x17
#235 @ 427,698: 18x11
#236 @ 421,322: 17x18
#237 @ 179,188: 10x27
#238 @ 894,915: 10x27
#239 @ 110,838: 15x24
#240 @ 640,831: 26x29
#241 @ 107,209: 28x20
#242 @ 68,910: 15x17
#243 @ 227,318: 16x16
#244 @ 576,552: 14x28
#245 @ 854,527: 22x23
#246 @ 676,89: 11x14
#247 @ 280,16: 22x22
#248 @ 871,406: 23x25
#249 @ 389,396: 24x21
#250 @ 299,615: 26x24
#251 @ 215,516: 24x22
#252 @ 512,602: 27x23
#253 @ 520,737: 25x21
#254 @ 199,198: 16x21
#255 @ 897,450: 20x28
#256 @ 602,173: 28x16
#257 @ 635,22: 17x10
#258 @ 913,765: 27x24
#259 @ 194,319: 19x18
#260 @ 566,550: 13x9
#261 @ 394,433: 22x26
#262 @ 620,354: 10x24
#263 @ 87,44: 17x27
#264 @ 655,585: 28x16
#265 @ 140,666: 11x20
#266 @ 395,47: 10x28
#267 @ 10,878: 24x23
#268 @ 775,820: 24x13
#269 @ 613,875: 21x23
#270 @ 717,465: 12x19
#271 @ 957,607: 23x24
#272 @ 509,845: 19x15
#273 @ 324,798: 12x24
#274 @ 526,406: 18x11
#275 @ 500,525: 29x26
#276 @ 141,386: 21x18
#277 @ 899,780: 17x16
#278 @ 266,412: 10x16
#279 @ 501,298: 22x23
#280 @ 86,392: 27x11
#281 @ 366,878: 21x27
#282 @ 582,114: 16x14
#283 @ 633,282: 24x21
#284 @ 581,769: 28x20
#285 @ 176,696: 21x26
#286 @ 761,902: 19x24
#287 @ 199,764: 13x14
#288 @ 685,909: 19x29
#289 @ 291,364: 15x17
#290 @ 541,903: 21x27
#291 @ 286,478: 20x13
#292 @ 752,925: 13x20
#293 @ 300,655: 18x28
#294 @ 548,234: 19x18
#295 @ 300,553: 27x24
#296 @ 838,49: 15x24
#297 @ 953,623: 26x17
#298 @ 642,212: 28x18
#299 @ 85,684: 13x5
#300 @ 732,83: 12x13
#301 @ 589,678: 23x20
#302 @ 591,235: 19x18
#303 @ 487,579: 15x13
#304 @ 430,608: 20x24
#305 @ 685,163: 15x17
#306 @ 225,324: 11x14
#307 @ 584,51: 29x13
#308 @ 725,382: 13x14
#309 @ 301,804: 21x13
#310 @ 966,68: 21x16
#311 @ 351,125: 28x19
#312 @ 75,384: 21x10
#313 @ 558,77: 27x18
#314 @ 601,617: 20x13
#315 @ 699,884: 15x28
#316 @ 138,237: 28x26
#317 @ 234,663: 21x10
#318 @ 650,556: 27x24
#319 @ 130,970: 24x21
#320 @ 884,348: 12x25
#321 @ 368,145: 24x25
#322 @ 52,38: 17x25
#323 @ 118,843: 27x22
#324 @ 641,812: 25x28
#325 @ 176,617: 15x11
#326 @ 609,592: 10x20
#327 @ 647,336: 29x19
#328 @ 173,286: 19x13
#329 @ 542,684: 17x10
#330 @ 102,621: 21x20
#331 @ 235,956: 15x24
#332 @ 59,910: 22x24
#333 @ 398,65: 16x27
#334 @ 912,870: 28x15
#335 @ 80,311: 24x13
#336 @ 91,1: 11x19
#337 @ 265,17: 16x27
#338 @ 524,816: 16x14
#339 @ 553,687: 26x24
#340 @ 456,639: 29x11
#341 @ 603,539: 27x14
#342 @ 524,8: 20x29
#343 @ 212,377: 26x13
#344 @ 161,914: 27x25
#345 @ 467,571: 13x22
#346 @ 433,148: 13x12
#347 @ 287,779: 25x10
#348 @ 82,762: 21x25
#349 @ 255,300: 29x23
#350 @ 671,716: 13x28
#351 @ 261,892: 10x18
#352 @ 501,373: 12x19
#353 @ 962,215: 18x20
#354 @ 596,110: 13x20
#355 @ 57,830: 27x12
#356 @ 903,215: 17x19
#357 @ 609,943: 16x28
#358 @ 81,959: 25x23
#359 @ 843,405: 23x22
#360 @ 579,304: 11x21
#361 @ 765,718: 22x17
#362 @ 386,833: 19x20
#363 @ 569,433: 19x23
#364 @ 352,186: 25x13
#365 @ 657,491: 24x22
#366 @ 487,669: 22x17
#367 @ 825,15: 24x25
#368 @ 350,129: 11x28
#369 @ 300,28: 15x17
#370 @ 263,645: 29x10
#371 @ 79,857: 17x17
#372 @ 514,13: 28x20
#373 @ 431,459: 11x25
#374 @ 85,221: 11x28
#375 @ 757,645: 22x14
#376 @ 151,326: 24x12
#377 @ 98,10: 21x11
#378 @ 904,873: 18x11
#379 @ 756,605: 25x13
#380 @ 599,422: 24x19
#381 @ 420,146: 21x11
#382 @ 64,264: 27x20
#383 @ 870,832: 13x26
#384 @ 604,45: 21x17
#385 @ 854,893: 19x22
#386 @ 109,749: 18x25
#387 @ 843,24: 25x26
#388 @ 198,504: 10x14
#389 @ 282,332: 25x28
#390 @ 611,584: 14x14
#391 @ 811,607: 15x12
#392 @ 125,671: 16x23
#393 @ 387,396: 13x29
#394 @ 190,248: 19x12
#395 @ 200,431: 27x17
#396 @ 674,168: 21x14
#397 @ 572,378: 11x29
#398 @ 900,186: 21x15
#399 @ 653,903: 16x24
#400 @ 964,207: 20x24
#401 @ 916,325: 14x16
#402 @ 894,330: 11x19
#403 @ 583,294: 26x22
#404 @ 893,616: 26x29
#405 @ 626,329: 11x19
#406 @ 816,895: 18x20
#407 @ 888,389: 15x13
#408 @ 617,291: 25x29
#409 @ 435,697: 10x21
#410 @ 104,91: 17x11
#411 @ 370,931: 10x10
#412 @ 163,187: 14x10
#413 @ 453,714: 11x16
#414 @ 408,669: 20x15
#415 @ 563,572: 17x17
#416 @ 299,519: 20x20
#417 @ 969,966: 13x22
#418 @ 728,76: 19x13
#419 @ 976,894: 24x28
#420 @ 492,640: 19x17
#421 @ 258,325: 27x11
#422 @ 742,152: 16x29
#423 @ 588,499: 24x18
#424 @ 685,47: 12x20
#425 @ 295,380: 21x21
#426 @ 829,447: 14x19
#427 @ 66,20: 25x22
#428 @ 824,901: 27x27
#429 @ 238,260: 28x24
#430 @ 357,629: 26x24
#431 @ 700,530: 20x20
#432 @ 738,351: 19x25
#433 @ 541,902: 17x21
#434 @ 118,129: 27x14
#435 @ 886,854: 25x28
#436 @ 14,209: 24x11
#437 @ 846,404: 26x21
#438 @ 939,150: 20x16
#439 @ 938,702: 26x17
#440 @ 4,207: 19x14
#441 @ 595,900: 21x10
#442 @ 463,477: 23x13
#443 @ 433,463: 23x11
#444 @ 773,407: 27x20
#445 @ 894,772: 11x22
#446 @ 918,766: 19x15
#447 @ 886,771: 13x10
#448 @ 664,140: 16x17
#449 @ 259,599: 16x7
#450 @ 82,855: 16x29
#451 @ 213,358: 19x29
#452 @ 555,899: 23x22
#453 @ 487,369: 24x13
#454 @ 41,524: 17x13
#455 @ 694,431: 29x14
#456 @ 707,680: 17x10
#457 @ 216,126: 28x24
#458 @ 888,242: 10x12
#459 @ 653,254: 14x22
#460 @ 587,252: 24x11
#461 @ 593,939: 18x29
#462 @ 432,511: 21x24
#463 @ 167,75: 28x20
#464 @ 599,874: 18x10
#465 @ 857,596: 11x26
#466 @ 673,153: 14x19
#467 @ 175,87: 26x24
#468 @ 921,560: 25x21
#469 @ 717,160: 11x13
#470 @ 201,306: 17x17
#471 @ 229,449: 14x15
#472 @ 698,288: 16x11
#473 @ 644,122: 12x15
#474 @ 611,609: 15x24
#475 @ 125,399: 24x15
#476 @ 498,546: 17x19
#477 @ 351,618: 12x23
#478 @ 752,902: 12x10
#479 @ 342,632: 15x12
#480 @ 342,142: 15x14
#481 @ 346,966: 24x14
#482 @ 579,125: 11x24
#483 @ 440,511: 25x29
#484 @ 930,919: 25x11
#485 @ 489,573: 14x25
#486 @ 543,888: 22x25
#487 @ 975,915: 18x15
#488 @ 32,678: 27x24
#489 @ 759,944: 21x11
#490 @ 39,722: 16x20
#491 @ 62,925: 23x10
#492 @ 507,311: 22x17
#493 @ 710,424: 14x22
#494 @ 614,493: 12x24
#495 @ 397,943: 20x11
#496 @ 855,21: 29x27
#497 @ 518,532: 19x21
#498 @ 179,73: 17x28
#499 @ 896,126: 11x13
#500 @ 424,253: 18x26
#501 @ 122,203: 19x17
#502 @ 67,750: 21x25
#503 @ 733,372: 15x12
#504 @ 929,576: 25x29
#505 @ 43,909: 28x20
#506 @ 115,509: 17x25
#507 @ 205,94: 13x13
#508 @ 380,75: 21x12
#509 @ 272,753: 17x13
#510 @ 114,285: 24x13
#511 @ 762,794: 24x15
#512 @ 966,207: 25x19
#513 @ 847,653: 7x14
#514 @ 518,131: 16x12
#515 @ 661,940: 19x27
#516 @ 166,919: 27x12
#517 @ 171,327: 23x12
#518 @ 204,111: 22x29
#519 @ 235,339: 15x17
#520 @ 245,5: 27x20
#521 @ 638,295: 24x28
#522 @ 494,288: 26x18
#523 @ 887,92: 29x10
#524 @ 574,65: 11x20
#525 @ 677,583: 11x21
#526 @ 722,661: 23x11
#527 @ 74,386: 22x26
#528 @ 939,727: 19x10
#529 @ 375,422: 21x17
#530 @ 658,559: 21x25
#531 @ 803,585: 19x28
#532 @ 465,706: 18x23
#533 @ 920,314: 19x28
#534 @ 915,574: 17x29
#535 @ 459,676: 21x12
#536 @ 199,953: 11x16
#537 @ 280,432: 22x18
#538 @ 691,671: 15x20
#539 @ 843,743: 17x25
#540 @ 140,194: 27x20
#541 @ 633,807: 22x18
#542 @ 187,300: 23x20
#543 @ 858,156: 23x26
#544 @ 954,406: 12x20
#545 @ 753,99: 21x17
#546 @ 118,582: 17x12
#547 @ 794,683: 17x10
#548 @ 201,667: 29x26
#549 @ 46,521: 25x13
#550 @ 843,735: 22x20
#551 @ 254,254: 23x17
#552 @ 309,667: 29x20
#553 @ 426,285: 16x25
#554 @ 556,392: 20x10
#555 @ 144,49: 14x19
#556 @ 251,248: 12x17
#557 @ 191,604: 24x11
#558 @ 515,949: 10x10
#559 @ 452,645: 14x19
#560 @ 71,949: 13x14
#561 @ 730,408: 17x12
#562 @ 218,734: 20x12
#563 @ 276,234: 24x25
#564 @ 914,755: 16x12
#565 @ 27,222: 23x22
#566 @ 904,783: 22x10
#567 @ 709,625: 18x13
#568 @ 324,426: 25x23
#569 @ 127,707: 23x18
#570 @ 8,295: 29x24
#571 @ 484,11: 25x20
#572 @ 346,310: 23x28
#573 @ 86,364: 20x29
#574 @ 967,372: 4x17
#575 @ 775,158: 14x11
#576 @ 444,62: 20x20
#577 @ 159,327: 11x25
#578 @ 626,466: 5x4
#579 @ 314,473: 14x17
#580 @ 840,714: 14x20
#581 @ 870,922: 14x13
#582 @ 287,779: 13x23
#583 @ 861,901: 16x10
#584 @ 749,329: 23x24
#585 @ 914,790: 27x22
#586 @ 59,646: 10x12
#587 @ 763,420: 16x14
#588 @ 480,82: 20x20
#589 @ 186,641: 19x29
#590 @ 30,159: 11x18
#591 @ 585,629: 29x16
#592 @ 130,464: 15x22
#593 @ 632,9: 12x15
#594 @ 216,965: 22x27
#595 @ 28,538: 14x22
#596 @ 669,538: 11x25
#597 @ 753,847: 21x26
#598 @ 445,498: 29x12
#599 @ 533,511: 17x17
#600 @ 344,422: 19x11
#601 @ 58,850: 14x22
#602 @ 225,268: 10x24
#603 @ 969,920: 14x20
#604 @ 654,159: 20x17
#605 @ 55,859: 28x15
#606 @ 917,927: 20x14
#607 @ 756,585: 22x11
#608 @ 51,638: 15x27
#609 @ 568,379: 21x15
#610 @ 129,277: 23x21
#611 @ 20,362: 22x11
#612 @ 398,948: 10x12
#613 @ 950,627: 24x23
#614 @ 536,556: 29x22
#615 @ 461,490: 28x19
#616 @ 248,208: 19x14
#617 @ 261,45: 20x15
#618 @ 195,72: 18x16
#619 @ 923,560: 26x22
#620 @ 175,900: 19x26
#621 @ 482,62: 18x21
#622 @ 756,143: 7x5
#623 @ 478,767: 22x28
#624 @ 274,902: 25x21
#625 @ 126,224: 20x25
#626 @ 964,624: 19x20
#627 @ 111,294: 25x22
#628 @ 656,345: 11x21
#629 @ 251,449: 21x12
#630 @ 700,416: 29x13
#631 @ 102,277: 27x17
#632 @ 881,292: 18x23
#633 @ 61,0: 24x10
#634 @ 136,975: 21x23
#635 @ 99,839: 29x25
#636 @ 195,516: 26x26
#637 @ 839,670: 22x14
#638 @ 652,242: 15x13
#639 @ 210,202: 28x21
#640 @ 594,171: 19x16
#641 @ 113,753: 10x18
#642 @ 538,943: 29x27
#643 @ 318,651: 20x17
#644 @ 235,238: 21x27
#645 @ 705,514: 20x17
#646 @ 118,757: 14x13
#647 @ 128,159: 18x26
#648 @ 288,660: 25x13
#649 @ 519,676: 14x9
#650 @ 754,808: 14x16
#651 @ 421,32: 20x21
#652 @ 660,351: 18x13
#653 @ 241,163: 20x11
#654 @ 140,293: 23x19
#655 @ 490,410: 25x19
#656 @ 506,590: 14x16
#657 @ 261,46: 19x29
#658 @ 539,787: 28x24
#659 @ 349,548: 11x13
#660 @ 293,19: 25x17
#661 @ 275,380: 18x22
#662 @ 52,513: 29x15
#663 @ 37,169: 18x18
#664 @ 43,150: 27x27
#665 @ 343,333: 18x22
#666 @ 797,371: 25x27
#667 @ 611,57: 26x22
#668 @ 727,900: 25x15
#669 @ 128,3: 11x27
#670 @ 483,734: 29x17
#671 @ 427,405: 17x29
#672 @ 863,626: 28x27
#673 @ 519,172: 26x13
#674 @ 585,407: 21x25
#675 @ 225,266: 16x25
#676 @ 977,113: 14x11
#677 @ 544,579: 16x27
#678 @ 890,592: 20x23
#679 @ 74,914: 21x19
#680 @ 45,530: 27x10
#681 @ 191,757: 23x11
#682 @ 59,226: 25x23
#683 @ 74,303: 19x23
#684 @ 463,305: 22x18
#685 @ 915,749: 24x27
#686 @ 923,89: 12x13
#687 @ 620,5: 29x21
#688 @ 933,710: 16x23
#689 @ 299,915: 12x13
#690 @ 458,30: 28x12
#691 @ 674,127: 28x12
#692 @ 321,817: 18x21
#693 @ 788,464: 5x6
#694 @ 411,19: 19x26
#695 @ 981,58: 10x19
#696 @ 101,71: 12x21
#697 @ 67,245: 22x13
#698 @ 251,41: 25x12
#699 @ 667,337: 10x15
#700 @ 624,751: 17x29
#701 @ 626,819: 20x10
#702 @ 730,826: 15x12
#703 @ 740,914: 19x10
#704 @ 946,163: 16x14
#705 @ 85,334: 29x21
#706 @ 848,754: 12x23
#707 @ 642,740: 12x25
#708 @ 840,40: 20x17
#709 @ 232,190: 19x21
#710 @ 419,194: 13x29
#711 @ 647,720: 23x28
#712 @ 723,528: 22x11
#713 @ 408,557: 20x20
#714 @ 906,553: 16x10
#715 @ 336,223: 29x25
#716 @ 954,288: 22x27
#717 @ 145,439: 27x16
#718 @ 272,740: 22x17
#719 @ 709,842: 20x23
#720 @ 774,723: 19x13
#721 @ 562,548: 21x18
#722 @ 944,161: 16x18
#723 @ 303,346: 29x16
#724 @ 583,245: 10x18
#725 @ 98,14: 13x13
#726 @ 811,542: 19x18
#727 @ 117,353: 13x20
#728 @ 429,62: 19x20
#729 @ 147,53: 25x17
#730 @ 481,523: 23x27
#731 @ 517,932: 10x25
#732 @ 472,518: 26x10
#733 @ 6,384: 10x28
#734 @ 597,693: 21x29
#735 @ 403,892: 6x12
#736 @ 338,703: 22x20
#737 @ 451,54: 28x29
#738 @ 690,224: 23x27
#739 @ 493,500: 10x18
#740 @ 180,68: 29x23
#741 @ 645,881: 13x22
#742 @ 640,641: 13x21
#743 @ 113,700: 22x29
#744 @ 83,331: 17x22
#745 @ 30,907: 18x24
#746 @ 205,854: 25x28
#747 @ 654,518: 28x21
#748 @ 784,462: 14x11
#749 @ 83,678: 20x17
#750 @ 545,583: 25x18
#751 @ 533,805: 16x23
#752 @ 545,497: 11x15
#753 @ 687,549: 19x26
#754 @ 521,693: 24x14
#755 @ 484,725: 26x26
#756 @ 660,52: 11x14
#757 @ 776,399: 15x23
#758 @ 15,304: 16x10
#759 @ 721,647: 12x26
#760 @ 196,439: 14x12
#761 @ 749,8: 18x20
#762 @ 926,45: 14x13
#763 @ 752,136: 15x20
#764 @ 294,632: 29x21
#765 @ 389,404: 24x19
#766 @ 306,963: 12x13
#767 @ 280,947: 17x10
#768 @ 329,99: 20x26
#769 @ 733,843: 13x15
#770 @ 408,157: 25x10
#771 @ 82,353: 16x16
#772 @ 423,14: 21x19
#773 @ 924,331: 24x4
#774 @ 384,155: 28x11
#775 @ 394,223: 25x28
#776 @ 791,465: 26x28
#777 @ 873,852: 12x26
#778 @ 767,307: 26x24
#779 @ 475,62: 24x25
#780 @ 260,621: 19x14
#781 @ 483,367: 13x19
#782 @ 668,294: 10x21
#783 @ 373,350: 18x15
#784 @ 713,535: 22x15
#785 @ 335,536: 24x21
#786 @ 427,627: 24x26
#787 @ 140,138: 26x26
#788 @ 874,506: 12x24
#789 @ 541,80: 11x20
#790 @ 471,32: 9x7
#791 @ 39,732: 28x17
#792 @ 377,565: 17x21
#793 @ 659,949: 10x21
#794 @ 226,955: 21x18
#795 @ 60,566: 25x12
#796 @ 203,253: 16x10
#797 @ 451,800: 20x24
#798 @ 194,862: 18x11
#799 @ 916,857: 24x24
#800 @ 116,277: 25x16
#801 @ 474,714: 11x14
#802 @ 453,289: 11x27
#803 @ 879,80: 18x28
#804 @ 307,811: 12x16
#805 @ 755,341: 21x15
#806 @ 675,512: 25x22
#807 @ 555,676: 19x13
#808 @ 549,241: 10x21
#809 @ 432,282: 24x24
#810 @ 744,9: 23x21
#811 @ 669,760: 18x27
#812 @ 577,797: 15x19
#813 @ 232,348: 27x18
#814 @ 915,230: 22x17
#815 @ 922,329: 29x15
#816 @ 447,629: 18x26
#817 @ 911,389: 25x15
#818 @ 850,752: 10x21
#819 @ 313,222: 25x15
#820 @ 492,545: 21x10
#821 @ 131,880: 24x25
#822 @ 491,590: 26x18
#823 @ 66,279: 24x28
#824 @ 529,865: 20x18
#825 @ 650,155: 17x12
#826 @ 529,159: 24x20
#827 @ 650,552: 14x23
#828 @ 703,897: 26x26
#829 @ 441,591: 22x27
#830 @ 901,221: 17x14
#831 @ 539,199: 21x15
#832 @ 115,236: 14x12
#833 @ 32,229: 27x29
#834 @ 263,93: 25x17
#835 @ 917,450: 29x20
#836 @ 420,5: 12x15
#837 @ 544,480: 14x19
#838 @ 10,534: 20x11
#839 @ 918,141: 28x26
#840 @ 683,130: 21x10
#841 @ 690,163: 25x12
#842 @ 646,18: 28x14
#843 @ 501,725: 20x22
#844 @ 372,546: 25x24
#845 @ 613,302: 29x18
#846 @ 78,920: 16x25
#847 @ 935,473: 26x16
#848 @ 533,28: 10x21
#849 @ 107,624: 11x23
#850 @ 820,649: 15x11
#851 @ 572,420: 19x13
#852 @ 725,449: 15x12
#853 @ 183,953: 22x17
#854 @ 651,324: 15x25
#855 @ 500,486: 12x20
#856 @ 692,886: 16x18
#857 @ 451,761: 26x12
#858 @ 938,610: 23x16
#859 @ 260,447: 21x11
#860 @ 434,647: 27x16
#861 @ 253,4: 11x15
#862 @ 400,430: 14x15
#863 @ 723,813: 24x27
#864 @ 607,539: 29x28
#865 @ 856,459: 11x15
#866 @ 310,957: 10x16
#867 @ 262,882: 12x24
#868 @ 355,244: 28x24
#869 @ 421,672: 18x11
#870 @ 645,739: 13x18
#871 @ 61,759: 24x21
#872 @ 447,300: 10x24
#873 @ 64,920: 21x13
#874 @ 595,248: 10x18
#875 @ 202,75: 17x23
#876 @ 882,478: 12x13
#877 @ 637,939: 28x10
#878 @ 949,513: 15x27
#879 @ 577,444: 26x26
#880 @ 760,315: 22x14
#881 @ 271,837: 29x26
#882 @ 969,287: 18x11
#883 @ 784,378: 29x26
#884 @ 483,366: 20x25
#885 @ 46,55: 25x19
#886 @ 386,831: 10x18
#887 @ 464,916: 12x19
#888 @ 766,578: 12x28
#889 @ 510,26: 25x26
#890 @ 442,389: 22x15
#891 @ 764,449: 25x26
#892 @ 798,718: 17x12
#893 @ 327,701: 20x14
#894 @ 641,734: 12x12
#895 @ 267,934: 15x21
#896 @ 241,262: 11x21
#897 @ 792,417: 23x28
#898 @ 122,531: 10x10
#899 @ 827,388: 10x15
#900 @ 282,762: 11x21
#901 @ 420,608: 12x11
#902 @ 576,934: 16x28
#903 @ 257,593: 13x23
#904 @ 122,122: 21x24
#905 @ 916,401: 16x23
#906 @ 908,195: 17x29
#907 @ 801,887: 26x11
#908 @ 262,919: 29x15
#909 @ 515,303: 22x25
#910 @ 259,756: 13x19
#911 @ 127,593: 27x22
#912 @ 508,651: 22x25
#913 @ 456,772: 15x29
#914 @ 624,78: 18x15
#915 @ 333,888: 19x14
#916 @ 799,48: 28x10
#917 @ 864,766: 26x25
#918 @ 589,528: 12x12
#919 @ 34,597: 18x25
#920 @ 511,235: 29x28
#921 @ 114,887: 21x29
#922 @ 69,950: 20x14
#923 @ 254,173: 23x18
#924 @ 342,595: 12x28
#925 @ 960,594: 15x26
#926 @ 236,242: 12x21
#927 @ 350,122: 12x25
#928 @ 877,466: 13x19
#929 @ 10,640: 11x27
#930 @ 762,646: 24x29
#931 @ 469,768: 24x19
#932 @ 673,15: 19x11
#933 @ 316,826: 26x12
#934 @ 82,688: 29x24
#935 @ 759,782: 19x18
#936 @ 705,521: 23x26
#937 @ 201,742: 20x25
#938 @ 769,604: 19x10
#939 @ 32,913: 18x21
#940 @ 737,93: 28x17
#941 @ 37,509: 26x10
#942 @ 179,444: 11x22
#943 @ 692,280: 15x20
#944 @ 496,807: 20x10
#945 @ 670,584: 13x12
#946 @ 127,942: 29x26
#947 @ 642,943: 20x16
#948 @ 832,70: 24x29
#949 @ 625,321: 17x28
#950 @ 924,266: 27x22
#951 @ 792,203: 16x12
#952 @ 867,726: 27x25
#953 @ 207,357: 21x12
#954 @ 200,817: 26x26
#955 @ 509,738: 10x10
#956 @ 550,77: 10x19
#957 @ 755,328: 24x21
#958 @ 738,887: 28x25
#959 @ 76,921: 17x10
#960 @ 868,620: 22x15
#961 @ 892,859: 29x18
#962 @ 672,543: 21x10
#963 @ 167,390: 28x14
#964 @ 130,878: 16x20
#965 @ 155,435: 22x16
#966 @ 554,90: 10x15
#967 @ 363,419: 15x18
#968 @ 167,619: 28x15
#969 @ 887,309: 23x26
#970 @ 926,760: 26x21
#971 @ 529,532: 14x10
#972 @ 309,679: 28x19
#973 @ 747,524: 29x24
#974 @ 837,707: 16x12
#975 @ 285,737: 28x10
#976 @ 704,676: 14x13
#977 @ 122,688: 14x13
#978 @ 907,846: 18x16
#979 @ 907,899: 24x29
#980 @ 44,535: 10x12
#981 @ 481,741: 28x21
#982 @ 555,588: 15x26
#983 @ 693,246: 29x12
#984 @ 502,584: 20x21
#985 @ 137,261: 23x18
#986 @ 568,83: 13x7
#987 @ 818,653: 18x10
#988 @ 631,760: 4x12
#989 @ 301,236: 21x13
#990 @ 658,569: 25x12
#991 @ 862,348: 21x28
#992 @ 303,485: 28x10
#993 @ 523,380: 17x21
#994 @ 717,168: 12x24
#995 @ 759,586: 13x20
#996 @ 65,417: 25x21
#997 @ 850,292: 19x26
#998 @ 559,308: 26x22
#999 @ 322,468: 13x19
#1000 @ 328,555: 25x21
#1001 @ 703,479: 21x26
#1002 @ 945,911: 17x6
#1003 @ 754,116: 22x19
#1004 @ 852,89: 19x19
#1005 @ 806,733: 22x18
#1006 @ 774,150: 10x27
#1007 @ 412,230: 11x17
#1008 @ 974,875: 21x24
#1009 @ 356,153: 20x12
#1010 @ 613,571: 10x26
#1011 @ 443,831: 26x23
#1012 @ 281,805: 19x10
#1013 @ 956,161: 20x28
#1014 @ 984,453: 6x8
#1015 @ 569,244: 29x12
#1016 @ 821,49: 11x18
#1017 @ 902,562: 13x16
#1018 @ 193,82: 20x23
#1019 @ 969,803: 13x16
#1020 @ 681,585: 23x15
#1021 @ 930,98: 19x21
#1022 @ 88,693: 13x19
#1023 @ 845,650: 13x22
#1024 @ 462,913: 27x21
#1025 @ 357,752: 23x25
#1026 @ 206,663: 22x24
#1027 @ 619,511: 13x12
#1028 @ 557,594: 6x11
#1029 @ 128,807: 17x17
#1030 @ 745,718: 26x26
#1031 @ 822,23: 26x11
#1032 @ 484,479: 26x25
#1033 @ 409,194: 21x21
#1034 @ 214,295: 22x10
#1035 @ 31,623: 12x15
#1036 @ 687,165: 12x19
#1037 @ 707,528: 21x18
#1038 @ 768,630: 20x23
#1039 @ 655,892: 13x15
#1040 @ 888,769: 14x12
#1041 @ 835,47: 29x29
#1042 @ 808,323: 16x14
#1043 @ 400,218: 14x10
#1044 @ 168,954: 11x25
#1045 @ 69,225: 19x19
#1046 @ 77,788: 16x15
#1047 @ 407,426: 24x16
#1048 @ 84,674: 12x10
#1049 @ 712,422: 18x11
#1050 @ 326,218: 18x23
#1051 @ 853,734: 24x20
#1052 @ 571,221: 18x26
#1053 @ 783,445: 26x22
#1054 @ 856,724: 17x22
#1055 @ 728,99: 27x10
#1056 @ 580,265: 22x28
#1057 @ 186,276: 17x29
#1058 @ 515,842: 26x23
#1059 @ 577,696: 10x29
#1060 @ 658,924: 18x19
#1061 @ 309,527: 23x28
#1062 @ 407,466: 26x16
#1063 @ 84,972: 17x6
#1064 @ 337,552: 13x18
#1065 @ 745,733: 13x16
#1066 @ 495,60: 17x16
#1067 @ 507,135: 26x15
#1068 @ 439,232: 13x27
#1069 @ 586,227: 24x14
#1070 @ 71,774: 12x22
#1071 @ 520,92: 15x11
#1072 @ 625,733: 13x25
#1073 @ 616,360: 11x13
#1074 @ 202,310: 16x22
#1075 @ 115,249: 12x14
#1076 @ 269,90: 26x11
#1077 @ 120,203: 10x14
#1078 @ 787,52: 21x29
#1079 @ 899,114: 21x21
#1080 @ 146,572: 27x15
#1081 @ 774,424: 17x15
#1082 @ 305,694: 13x29
#1083 @ 523,406: 24x26
#1084 @ 293,291: 25x26
#1085 @ 830,662: 10x29
#1086 @ 915,442: 10x21
#1087 @ 369,935: 24x26
#1088 @ 357,597: 16x22
#1089 @ 352,780: 6x6
#1090 @ 108,368: 17x29
#1091 @ 487,804: 21x11
#1092 @ 497,139: 23x24
#1093 @ 936,174: 12x21
#1094 @ 254,652: 20x10
#1095 @ 75,406: 12x26
#1096 @ 463,766: 14x20
#1097 @ 100,459: 29x15
#1098 @ 116,128: 13x13
#1099 @ 292,585: 12x16
#1100 @ 490,787: 25x13
#1101 @ 91,557: 13x23
#1102 @ 390,557: 17x10
#1103 @ 342,421: 25x10
#1104 @ 21,83: 21x13
#1105 @ 923,141: 21x19
#1106 @ 427,300: 28x26
#1107 @ 550,618: 26x24
#1108 @ 393,457: 22x10
#1109 @ 126,838: 21x22
#1110 @ 254,597: 25x12
#1111 @ 466,905: 12x23
#1112 @ 862,581: 16x28
#1113 @ 938,60: 18x12
#1114 @ 375,286: 15x13
#1115 @ 740,775: 21x20
#1116 @ 268,75: 26x17
#1117 @ 613,615: 14x29
#1118 @ 630,488: 29x13
#1119 @ 401,527: 18x27
#1120 @ 231,789: 27x24
#1121 @ 642,483: 27x14
#1122 @ 528,259: 25x10
#1123 @ 825,884: 28x18
#1124 @ 143,584: 26x21
#1125 @ 502,602: 10x13
#1126 @ 475,417: 25x14
#1127 @ 369,904: 24x12
#1128 @ 825,465: 12x25
#1129 @ 741,76: 12x27
#1130 @ 650,947: 28x15
#1131 @ 723,405: 20x17
#1132 @ 290,700: 20x15
#1133 @ 469,756: 19x19
#1134 @ 726,900: 24x25
#1135 @ 436,487: 22x24
#1136 @ 391,544: 11x27
#1137 @ 196,697: 18x28
#1138 @ 814,335: 24x15
#1139 @ 520,416: 12x24
#1140 @ 845,302: 10x16
#1141 @ 282,298: 25x19
#1142 @ 770,398: 23x27
#1143 @ 130,209: 27x14
#1144 @ 325,324: 24x12
#1145 @ 650,951: 21x26
#1146 @ 701,455: 26x10
#1147 @ 559,86: 28x11
#1148 @ 741,883: 16x13
#1149 @ 509,95: 24x19
#1150 @ 958,219: 17x11
#1151 @ 85,17: 24x11
#1152 @ 763,868: 14x29
#1153 @ 109,921: 22x23
#1154 @ 440,604: 13x10
#1155 @ 230,198: 27x21
#1156 @ 393,255: 18x25
#1157 @ 471,322: 28x13
#1158 @ 543,471: 27x10
#1159 @ 49,243: 17x22
#1160 @ 413,635: 13x21
#1161 @ 69,572: 22x18
#1162 @ 769,975: 25x18
#1163 @ 594,102: 17x28
#1164 @ 744,889: 20x10
#1165 @ 676,743: 11x29
#1166 @ 492,11: 12x18
#1167 @ 393,232: 21x12
#1168 @ 856,774: 14x22
#1169 @ 247,256: 16x29
#1170 @ 488,683: 14x21
#1171 @ 526,244: 25x25
#1172 @ 276,356: 27x13
#1173 @ 514,655: 10x20
#1174 @ 968,118: 16x10
#1175 @ 187,284: 11x16
#1176 @ 717,837: 28x24
#1177 @ 533,548: 28x26
#1178 @ 812,722: 22x12
#1179 @ 441,286: 25x16
#1180 @ 344,682: 10x26
#1181 @ 859,733: 20x14
#1182 @ 117,848: 21x13
#1183 @ 439,12: 14x22
#1184 @ 388,269: 10x23
#1185 @ 350,144: 13x26
#1186 @ 199,218: 13x13
#1187 @ 765,767: 26x20
#1188 @ 204,880: 12x26
#1189 @ 265,574: 25x20
#1190 @ 282,3: 25x29
#1191 @ 247,367: 19x14
#1192 @ 246,723: 18x26
#1193 @ 650,117: 21x14
#1194 @ 560,203: 13x10
#1195 @ 850,457: 25x16
#1196 @ 745,820: 23x13
#1197 @ 230,267: 22x23
#1198 @ 942,908: 24x17
#1199 @ 53,494: 23x10
#1200 @ 548,579: 25x11
#1201 @ 387,538: 11x24
#1202 @ 283,641: 17x11
#1203 @ 925,40: 21x21
#1204 @ 489,555: 20x23
#1205 @ 565,284: 29x21
#1206 @ 823,886: 20x23
#1207 @ 344,414: 19x23
#1208 @ 635,945: 25x17
#1209 @ 38,511: 29x15
#1210 @ 199,834: 21x14
#1211 @ 783,105: 13x20
#1212 @ 772,123: 24x14
#1213 @ 294,588: 6x6
#1214 @ 982,442: 12x26
#1215 @ 766,749: 20x28
#1216 @ 307,916: 26x28
#1217 @ 115,687: 17x22
#1218 @ 274,841: 13x13
#1219 @ 291,256: 16x28
#1220 @ 494,731: 29x11
#1221 @ 130,12: 17x21
#1222 @ 188,869: 18x17
#1223 @ 939,164: 16x23
#1224 @ 449,900: 8x14
#1225 @ 330,922: 23x22
#1226 @ 101,952: 20x13
#1227 @ 78,2: 24x25
#1228 @ 273,83: 21x12
#1229 @ 950,345: 29x27
#1230 @ 280,248: 22x20
#1231 @ 555,380: 15x26
#1232 @ 244,2: 19x17
#1233 @ 790,374: 13x23
#1234 @ 846,922: 27x14
#1235 @ 682,807: 28x12
#1236 @ 35,57: 29x13
#1237 @ 215,226: 24x24
#1238 @ 703,10: 25x15
#1239 @ 690,66: 17x24
#1240 @ 945,86: 22x18
#1241 @ 27,170: 15x22
#1242 @ 2,394: 15x29
#1243 @ 166,334: 11x22
#1244 @ 816,871: 16x19
#1245 @ 223,782: 17x27
#1246 @ 112,217: 20x21
#1247 @ 76,2: 4x4
#1248 @ 875,871: 16x21
#1249 @ 11,371: 23x26
#1250 @ 810,771: 14x19
#1251 @ 914,759: 20x16
#1252 @ 203,121: 11x24
#1253 @ 396,412: 29x14
#1254 @ 912,325: 28x10
#1255 @ 75,344: 12x12
#1256 @ 247,257: 12x13
#1257 @ 253,343: 27x18
#1258 @ 239,380: 21x11
#1259 @ 645,135: 23x15
#1260 @ 881,886: 28x18
#1261 @ 162,379: 10x18
#1262 @ 589,787: 23x10
#1263 @ 437,315: 23x13
#1264 @ 119,208: 10x21
#1265 @ 299,760: 12x25
#1266 @ 3,874: 29x13
#1267 @ 470,667: 27x24
#1268 @ 908,269: 21x10
#1269 @ 92,490: 25x20
#1270 @ 510,674: 28x15
#1271 @ 906,902: 27x18
#1272 @ 880,286: 14x27
#1273 @ 80,464: 21x13
#1274 @ 188,885: 19x15
#1275 @ 541,762: 22x17
#1276 @ 533,5: 25x26
#1277 @ 748,963: 25x24
#1278 @ 401,339: 14x23
#1279 @ 19,611: 24x12
#1280 @ 613,784: 25x28
#1281 @ 897,295: 13x16
#1282 @ 49,760: 14x24
#1283 @ 65,738: 20x20
#1284 @ 749,592: 14x28
#1285 @ 491,780: 16x29
#1286 @ 256,632: 25x23
#1287 @ 589,430: 15x26
#1288 @ 622,460: 29x14
#1289 @ 345,634: 7x6
#1290 @ 907,216: 16x26
#1291 @ 877,140: 27x20
#1292 @ 393,261: 12x19
#1293 @ 881,346: 11x26
#1294 @ 421,626: 14x24
#1295 @ 104,8: 16x13
#1296 @ 237,203: 10x12
#1297 @ 685,291: 26x11
#1298 @ 506,17: 27x16
#1299 @ 570,396: 13x18
#1300 @ 289,277: 13x28
#1301 @ 116,505: 28x11
#1302 @ 515,847: 17x22
#1303 @ 411,209: 14x15
#1304 @ 408,952: 27x20
#1305 @ 331,793: 21x26
#1306 @ 831,882: 19x18
#1307 @ 302,560: 21x8
#1308 @ 506,398: 29x11
#1309 @ 433,387: 25x11
#1310 @ 565,938: 27x13
#1311 @ 205,330: 27x23
#1312 @ 663,835: 12x20
#1313 @ 845,398: 21x21
#1314 @ 532,25: 28x25
#1315 @ 533,757: 11x15
#1316 @ 727,108: 14x17
#1317 @ 658,68: 29x22
#1318 @ 591,390: 19x17
#1319 @ 583,248: 10x12
#1320 @ 942,391: 23x22
#1321 @ 683,778: 21x11
#1322 @ 162,970: 27x11
#1323 @ 709,818: 14x28
#1324 @ 162,282: 14x27
#1325 @ 898,441: 25x12
#1326 @ 657,892: 13x26
#1327 @ 584,226: 20x26
#1328 @ 77,915: 28x20
#1329 @ 449,714: 18x29
#1330 @ 135,293: 24x28
#1331 @ 773,826: 16x19
#1332 @ 875,513: 17x14
#1333 @ 99,135: 24x13
#1334 @ 756,511: 11x20
#1335 @ 756,755: 13x28
#1336 @ 331,621: 22x19
#1337 @ 592,905: 14x27
#1338 @ 554,21: 24x27
#1339 @ 214,244: 27x25
#1340 @ 537,694: 18x15
#1341 @ 955,539: 11x15
#1342 @ 594,509: 16x27
#1343 @ 978,953: 18x23
#1344 @ 225,527: 28x11
#1345 @ 760,83: 24x21
#1346 @ 943,479: 13x22
#1347 @ 670,278: 20x26
#1348 @ 656,749: 14x25
#1349 @ 850,417: 16x15
#1350 @ 957,81: 24x16
#1351 @ 331,914: 11x24
#1352 @ 651,113: 28x19
#1353 @ 240,198: 29x10
#1354 @ 296,697: 21x10
#1355 @ 782,134: 14x26
#1356 @ 33,399: 27x13
#1357 @ 275,416: 16x21`

const r = /^#(\d+) @ (\d+),(\d+): (\d+)x(\d+)$/

const claims = input
    .split('\n')
    .map(s => r.exec(s))
    .map(m => [m[1], +m[2], +m[3], +m[4], +m[5]])

const [w, h] = claims.reduce(([W, H], [, x, y, w, h]) => [Math.max(W, x + w), Math.max(H, y + h)], [0, 0])

const m = Array(h)
for (let y = 0; y < h; y++) {
    m[y] = Array(w).fill(0)
}

function* squares() {
    for (let [, X, Y, W, H] of claims) {
        for (let h = 0; h < H; h++) {
            for (let w = 0; w < W; w++) {
                yield [X + w, Y + h]
            }
        }
    }
}

for (let [x, y] of squares()) {
    m[y][x]++
}

console.log(claims.find(([, X, Y, W, H])=> {
    for (let h = 0; h < H; h++) {
        for (let w = 0; w < W; w++) {
            if (m[Y + h][X + w] > 1) return false
        }
    }
    return true
})[0])
