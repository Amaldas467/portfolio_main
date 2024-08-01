'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7ad0337abfbe8df12ed3e61f8d26554c",
".git/config": "3141fcd312094ccfd82b8286ebea01eb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5948a21a350a40ffca92beadd7781764",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "42810e6526f9b0fd57cd1659f984f9da",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "eb9782611508798cfc9b5abbebe460aa",
".git/logs/refs/heads/gh-pages": "f0a53d4ce40ec79da230e890c4413c8c",
".git/logs/refs/remotes/origin/gh-pages": "8250aeb40e3e7805303a8b3a27ee6e70",
".git/logs/refs/remotes/origin/main": "7c721574aa54505d3f0d101fa5512456",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/01/3c685318e6ba2cb207a76a747a15183a2b0ebd": "ee1e13ec985a83bc00243dd044357ecc",
".git/objects/02/409c06c2a72e6b7d1c0cc7e76377d364cac943": "adf3234e342ed76922f3d605efda97ea",
".git/objects/03/32fab4464096507ae89939ee06650d8e3a76df": "3b9c37dcf15eb3b980c2a142531eb50a",
".git/objects/03/e3e0fe1044ef34a8801d6bad608d02ea8e2c72": "f937cd53784a967ed955e1259e2587ae",
".git/objects/0e/75b3f7598964143f7e558833815baf71e46cf9": "b579f0567df695aa323198cffcce4a1b",
".git/objects/0f/aeae813fcd7b40e66333ef5403dc4016267b83": "59627a1a358b13c8bf97c8de681f29e0",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/11/b582a0a285868f381579dc1fd24c08d9641ea5": "3acb36906016cd6a48f4b70ebbc9bc20",
".git/objects/17/3b87cdcff1a6c51dbea21be582b5e861520c7f": "b6a706a146390526822152e432fe4b3c",
".git/objects/17/7b1770e2705f67890eb0b83f37552966b57c85": "2e1770fe4efacc8dad72138e5f0f9383",
".git/objects/17/ed899cc6f667014abe1b02d6797fcd082cd517": "5499b4565473106bfbbed9ea11d1e6bf",
".git/objects/18/a103199df81c79a56ccdbe53aa3db092783377": "16f598f632bfd08e6e684f0982f450e8",
".git/objects/18/a139212369e4b5e37b91d922c624539900b98e": "74b5f2ab244c3509c0b3619c341436b5",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1a/015afd9431e83b8a94f6cc0349628b816d52b6": "5efe3449b7bf919d299df5214b404cdd",
".git/objects/1c/b856fdbca0c18093981124108f9543759470b4": "04d1d3c8bc54e2bf630c32c0c26772b5",
".git/objects/1d/9c51416cee1dda97367346fb4d28c5b29bff90": "7ac94aa0e95e573249ab5c2fa34e893f",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/77661cf4daca682b8c92a9389a67de37d87d48": "740b343252d1c69bb50a2812a61c8a4f",
".git/objects/29/3590c875a835e68633fb72b4c02de890e24fd9": "ea6c7f7a3bbc555f2e7049a59d857a4a",
".git/objects/2a/c25992a4ead1dc5f8f30f76848fc991b4a3b25": "d6ddfa757cff1440db2c1ad7ccb5cf88",
".git/objects/2c/a515234a3a94f4eadc82683fb4894f065a1027": "2aec7fe57de90b4486e4dc901bdd8d24",
".git/objects/2c/b382eb5932e0eacc39bd9e0e092e65969d643c": "5dd79e20076299a6c769e0a7e0040d85",
".git/objects/2d/466974af00fea0dfc034fd3badf9232ce49a22": "588a00853c4720f9c15529a1556f3a26",
".git/objects/30/effbc980a88c1b600437a935c8916f5fb426f4": "cee189739030ca3fc1004579e2915bd5",
".git/objects/35/65c776c3ed368c2ea5e7a612f6b9cd5bb8a2bd": "eaccd3a7310622f30cfbf5aad904506b",
".git/objects/36/4ead2a7a1f84e6887ff9f79ab4be9e06472dd0": "b98b7ff27d76e4bbfa8c556209dfa5a6",
".git/objects/37/39af2f316d309ee916533dcbdd74c148e9784d": "678022ae593c41aa5455425291874f6b",
".git/objects/3a/4796f6e5d20423f0e5d7c99baa33769c928252": "6c3e291968ff8034d081952d5788ed6d",
".git/objects/3a/956ee2c1126893739333f2f1f76948ab6c4fa0": "8197c1c411985ec48bdc1ccc452ddddd",
".git/objects/3b/26eb537b7a991d519be107afbe7ba6224da115": "b43c23e2edc5bad5d019d31718e031f5",
".git/objects/3b/4749eeadd6cb08cdfaa5c9dafd0020c521b541": "2129435a492370f29031779708044a34",
".git/objects/3b/7aaa890b6e565bdde07716fe9764df18d9cd62": "a781e167d9771fab9ed1c6e287c68ac9",
".git/objects/3b/ef82bc93db6999e9a6e142e7f124c7c79801b4": "e5ba8bd1e379844f3a8ec80469d0d23d",
".git/objects/3f/8d067fa955a5da515573fc869afe03cb5e0b71": "a6415c93cb01e932936573ec97b9ddb2",
".git/objects/3f/cee75ec067adabac11d007a444d057a1dacef3": "360dadad17404caeaca3996b2d5e7bd4",
".git/objects/40/4456a9b6f8bf1a4cb65a2cd0029d252d8113a3": "aafee037c07ec47f111f305091087f19",
".git/objects/44/da55c935b887b5bc10edb0b880b3200c00f43a": "26885ebea0038eb82dd2f8476e1d17b1",
".git/objects/44/dcd56df25a547549dc1fe757edd3adcccd118c": "097402ae60d2d7835cf6de1cdf037ad2",
".git/objects/48/69530e5dfe26b47bf5c245e5c2e493dbe07281": "af53b9ffca0aa3c4a92a48e52306c9d4",
".git/objects/49/9279df54df97e338f8cb24b3a298a5714d1e33": "492f1f55321504f8eeb46842f14b66d2",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/51/cae9504c6c1cbec37a6f2478c73cddfafb7003": "67ac9ed8add4ee0cd02bb1e249bb89b8",
".git/objects/52/b21a9baa75e0aa7066937675807f544b8f9868": "4dffcdeb88da71e9fac547ac1cd4ee92",
".git/objects/52/f61d0ac633c37679a073e0bc085c7239989960": "4f6e4017353e5e38b271d795088bceb7",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/7d4c22334b7a182550fc4a9760e94a3e7402dc": "79111e00dabc18fa0ddb9274402c8f56",
".git/objects/56/5108a696b03834da1f2b5cb92f42116aa8e478": "9af41bfc14b2afe5ac4b4d352a4aacbf",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/bc0159716e95b4136f680aa6739b26be71071a": "3c9ab0cd775b134d08bdc1c1656831f2",
".git/objects/5a/65a403a9b6ab69f32465818f0361cd587a41d3": "b881566ab38a71c038786817d179b1a6",
".git/objects/5a/bc12ded0cafa020f8493111edcfc54a9ae6370": "6bb69958c39b4ab6b13f2fc85602a9b7",
".git/objects/5b/ee4bd4d4863ba372dbe614e3615679e50cf1f4": "cd223c5fe94dba0b30da9350bbef1b1e",
".git/objects/5e/b2e68972e5248da31767b442c6b8a7887d5dc9": "ed506f91ffbfaeb68ce3e2f569168e05",
".git/objects/5f/67aef9a0837677681c9f229bc71316c8dbad71": "d788469493048d8cce958a670575bf2e",
".git/objects/62/19e0f9dc1589437ff29ad0e852f25554579c32": "861229532613cccf552590d036c7452c",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/65/631a98b738e5d7aa02a61a631001528695d385": "fd88a7922264e3a4793f19ce99e0cfe1",
".git/objects/67/9f4582682de2cb9b5a0471691abcbf90e60e1e": "5fa62570105ff705f5db32b3b2751557",
".git/objects/69/00101c5a8f1b17688b5cbca0ae0c8cd12581f9": "9544a4d026ebf22d82f49142938bb115",
".git/objects/69/2f9dab6ee13e009bc085c56ebf37b0cab4e677": "bc8dd62cd41b96dd2db24f4683be05bf",
".git/objects/6b/137b54782106b8436820611493b4c414dc2f51": "5b71ae24d2251c8cf4fc79d74b568b4d",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/c6120c45fcbca803d8b5f7c01fd051912822ed": "d70406897291dd8795f85da8e87d21a3",
".git/objects/72/fb9a5e173eac7eb2f1a026e6c01f298bd8607c": "f4e91a4ecef12e7addf97d8a4e2f54ae",
".git/objects/73/c027e54fec9f5e2cd851cebabeef7acdf06ebe": "082019d17e759c7d3b2f9ff7e533d95b",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/75/1e836c98e12df9ac372c3b3d3d94cfd2fc3524": "81d4a9f2820f141c2c1d314a622d8899",
".git/objects/78/44a1567a477eab9764fcd64ac5f6a26da72b48": "4aa26dc1acc289bd45f33c2cf06617e6",
".git/objects/78/77b0ac786197ba04c3dbf39f7e714d0f45ffdf": "d6f06f8ae8f10fa9b0597e9246f3d8d4",
".git/objects/78/981bbef14b44e4635af61da5b11f011846586f": "7a8aed287e3e934b01c969eee1ffd69f",
".git/objects/78/b03eb0e13fbb6962596a77131d15786ee16a09": "cea17ae7660b8b1d637e8c155d7b5ce8",
".git/objects/78/e22f69e1f982bbfb19b5880567fdeaaf882374": "1724310debdbe08713682d4250b78964",
".git/objects/7b/a9d2fa4a90ec6f65e3332b1fe3177a99e52795": "d0e197aa4baa17f7e90f6f8f27d73a11",
".git/objects/7e/7c6611c0dd769bbb8fb8a7a5ec996e8cc50d82": "b51e5f33133f4541dbedd194f383e1e5",
".git/objects/83/374bba320b04e130d02eb519ddcfb61fc05226": "422d59c6de7fd252da238b18586e4a7f",
".git/objects/85/cf1a1cd504e8b0b2f3d0860959cc5f86284065": "78277a0695a30334038ac0782f409554",
".git/objects/89/0fb428415f649b78b8630a760929725203bfba": "976a307d5705fd5a4f24c80d7cccaf78",
".git/objects/8a/fd69768462c2e1f36b10a0e4b6f19ef0bec89d": "c895134e8c418e445cc721785830042c",
".git/objects/8b/6ff14246fc9dd8dd3827ffc96b3884227ff5c3": "b2f3f19bd89f0d7d1cb4861f0a97f4e1",
".git/objects/91/b5b59df77e226685be96524339fedb115a0ecb": "6e7584bcaa46fa43774139b9aca818e0",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/81c905477f7b217fea222c8149212ae5d399cc": "45c22883c7bc7259e4d384d56569fe9a",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/99/32cd19904079e07617701a47152e25a5d10637": "c1b2cd4ff4ce3fb2dbc59f26bf3cb25c",
".git/objects/9c/c24e32e0d9aae3876603186443a0ae07a2e1b0": "30d773c184428dd459ca9c61160e64c2",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a2/ff3681c50dc9190766f5b8719aae05ef964049": "dffe123d1ba1a60816302704a4401ea2",
".git/objects/a6/fbe727a1eb17d0e1bbb01354a1e46e9d1aa551": "e7dff41830270287f5f3336518dfac42",
".git/objects/a9/0bdb88c5ac37dc39280c076a3cc3b7969353c7": "39cb18a63e0309230689cc0355c1abe3",
".git/objects/a9/d25ffe5259a2f30bb8d50b3ce2cf08220929dc": "8657f3fd107d19615d820ec03d036958",
".git/objects/aa/0b5d6cd7449e43f20e8ef2dffa33a1f9d19148": "b9d9315218a7a078ffbb38a4846916ef",
".git/objects/af/3f81a2832b2d0a141a2fe08eb31d5a0d81d22b": "af1555f4030b303c9cd9ba0d5c509027",
".git/objects/b0/ec7d5c97d6859bed71c8f40595d66953ad81d4": "70c688aa64f1a191ca2986ccac51483e",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/3fec63090a6b410b665a5b01d14e335ba3dac8": "73ea3783ccacd3a05b1a29fbb2cb599b",
".git/objects/bc/a5004f555aa4f8440d03cef15f598cb46455eb": "49578bd107161bd5c4ac030a1ced8029",
".git/objects/c0/0a937d2bdbce48b6d1dc48a618fd4d5a3a4328": "bd007ab6175c4b94fe79989c6534a9ce",
".git/objects/c0/2635b2e838e3f46e0b04809a71d032deee1c61": "c490c095cf87f5e1160ee08874f34563",
".git/objects/c4/6b28d5d1f6d7ab7765fd5e394ffb8e83fb18db": "3758957c36f15b93f1e6109fc78ffd12",
".git/objects/c6/5d72ebb6f40ec9bb0befa20c9695330037e276": "ea066b7fc98700bca70ef333dd8e1e88",
".git/objects/c6/d6212fdb4dae9dfb57e46a01de69506c895fc4": "2f4a3eab1269cce5d6cf9b4bd40f85bf",
".git/objects/c7/c371bf8f6c128ce5a5fa4f535a632069451f67": "2309cecb9842346181414726858331c4",
".git/objects/c8/18e65b0584832b870f681be6f56cec97da7f15": "2810caaa930460d474ed77a77f6afa1d",
".git/objects/c8/2143a117ebead67e1140659ee79a18858d710b": "4ec6589e16e512ad821afbbd7c436aa3",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cc/849de9d1575113c1c6786b2d3cf367c90c7113": "7234118f8f0d9aecf2d2b4cdf20da1ab",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/457e27f097d73d0b9e83331122c7922c89a71b": "27b03aee947ae5bab1ce59791edb2563",
".git/objects/d6/7dfe9bb4a98d5b29ff8aab02db88bfe1b2aadb": "45a1b96ec87b3da2005b74cbc3ec4a41",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/9e05bde753022c74ba5d2d8819ca4d86174781": "e535f2b4aa6a787db9d14f690ca8b62d",
".git/objects/db/d1d56ed8a0d7d0b4e418e5109bee41823d2596": "1afedfde02f12c1cc7b30448c30f8af1",
".git/objects/dc/3ec31587180806520ecd301aede8876a8d5489": "9e442b86cbf5cb828142f298fdffab18",
".git/objects/dc/3f2a0aad47913f1d51257649c619e29315ced3": "701cc3a106f6a5d3194c391d2affad59",
".git/objects/e2/513c1aef2f60a09cb4814b5d35f91ec04a9468": "a62285ed5ce535c8752c2e03e5c1a635",
".git/objects/e5/8b14cead71668ff78506388e65fcff307a38bd": "dce67fcd6932207a80706be22db27565",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/96fd1e898b61d461d736f5b09ac8133be4ef7b": "dc5f546fc933d5150f5974f2d9467f5c",
".git/objects/ef/bd67ba6a8b97c21d9a079b1505afbc95e2143c": "43417d604a318fda59f88cc9b786c4be",
".git/objects/f1/26be470b0fee9db66ccf482db3cf3ee8cfb356": "1f021b01a2974250f6a821924470e595",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f9/d240a94e6a7d6600fa3ce6c9caea17c4fd10be": "07199dd20b186e7faf409dcabff1aa69",
".git/objects/pack/pack-299f90ab0b3fa573a4e1bd9845a25805ee7243a1.idx": "9178be59af6f42b7e8d12cf1d0955d71",
".git/objects/pack/pack-299f90ab0b3fa573a4e1bd9845a25805ee7243a1.pack": "abd0e70d439c3eeee99a3e517db129ba",
".git/objects/pack/pack-299f90ab0b3fa573a4e1bd9845a25805ee7243a1.rev": "87071daca76f1cea0df9c09fcc7113fc",
".git/objects/pack/tmp_pack_Fth9Mf": "d4b8f31365eb3f13972eecd54c7fd480",
".git/ORIG_HEAD": "6db55c6a358ae53fa24209463ccdd25c",
".git/refs/heads/gh-pages": "6db55c6a358ae53fa24209463ccdd25c",
".git/refs/remotes/origin/gh-pages": "6db55c6a358ae53fa24209463ccdd25c",
".git/refs/remotes/origin/main": "583e26e100681363e75b290f77752bdd",
"assets/AssetManifest.bin": "a17a7e3c4a3541e23c0f8d329778833d",
"assets/AssetManifest.bin.json": "e7077f58f43bc23ea1fa76cc0fe65d75",
"assets/AssetManifest.json": "4af69f5d6bd6599615460ecaecc3bec4",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/icons/dev.png": "136350fd9f00dc8d1dd1514e40b9f9cd",
"assets/assets/icons/developer.png": "6576f0932f8dc70413579a59715c184b",
"assets/assets/icons/done.png": "d3786409b1df621a0b55e61d92430590",
"assets/assets/icons/facebook.png": "cb055867df3c7b03ef1135f77d1a9411",
"assets/assets/icons/github.png": "e6b2daf427b81c388625ffee75f2acf4",
"assets/assets/icons/hashnode.png": "5830176711a7028847bb9ef5fba9b39b",
"assets/assets/icons/instagram.png": "78064309e7314e8399f3f83d715aecc7",
"assets/assets/icons/linkedin.png": "1816e5c1168ca75e4e824ed21c4f002a",
"assets/assets/icons/student.png": "e9e5874f03b649f3101e7458f3b7acdf",
"assets/assets/icons/telegram.png": "c89ff009e3e05233e29b53baea4b57de",
"assets/assets/icons/twitter.png": "632f6320a7e3538439ffafd9ee8a03cd",
"assets/assets/icons/volunteer.png": "7c2b0e4e0cd150fd439e01cd60da1261",
"assets/assets/icons/youtube.png": "92d7341ea8fd5c88350cbd570a145f43",
"assets/assets/images/amaldasdev.png": "a1ae31e09696cc03047a398fd8e70042",
"assets/assets/images/ddstechvira.png": "e8468c1307955ea1f2e64bb5b3f14a80",
"assets/assets/images/flutterscope.png": "bf9d96f9660b19b398e0b02316f65523",
"assets/assets/images/github.png": "bada3b2dca0911637f07d961cd7da5d5",
"assets/assets/images/logo.jpg": "9cf01aef5a220c54dcdd39a7e79a7c6b",
"assets/assets/images/logo1.png": "fb80a69aeb2f559e6a1aae532e49032e",
"assets/assets/images/logo2.png": "eb1620f133820d29c94b7f5d9085f2fb",
"assets/assets/images/luminar.png": "415c4812cafa901ff7b0a747b9d47bc3",
"assets/assets/images/mlsa.png": "ac77090e37e75814439d7134e6f38d28",
"assets/assets/images/mms.png": "a8433784455e9ee9315e59d1fc1e1357",
"assets/assets/images/nibm.png": "b0842646385fb6105a447c069b668579",
"assets/assets/images/phone_frame.webp": "f25e231ab5e53749b8e1b915cb30cb79",
"assets/assets/images/project/screenshots/expense_tracker/expense_tracker_add_record.png": "6b2026582d888156c845a978bc486b02",
"assets/assets/images/project/screenshots/expense_tracker/expense_tracker_summary.png": "9d61947a96ecdfc8827f1e1321b75e5d",
"assets/assets/images/project/screenshots/grocery_store/grocery_store_cart.png": "53369dcc1c0eb2fbdf12db32462dddb4",
"assets/assets/images/project/screenshots/grocery_store/grocery_store_categories.png": "7d838be62e1f80a732abd376ffa3fdf6",
"assets/assets/images/project/screenshots/grocery_store/grocery_store_checkout.png": "30a7bec40b7c60e7b1f712ff10e53a5e",
"assets/assets/images/project/screenshots/grocery_store/grocery_store_favorites.png": "a9b5945754bd6e32d5e47a92a22ba8f2",
"assets/assets/images/project/screenshots/grocery_store/grocery_store_home.png": "8ef7818859dee05e607077927039afaf",
"assets/assets/images/project/screenshots/grocery_store/Screenshot_1718776012.png": "c0936860be41f04024c8f2db1d56a36c",
"assets/assets/images/project/screenshots/instagram_ui/instagram_account_selection.jpg": "148db175744fc4337431f8fc0ff84bfd",
"assets/assets/images/project/screenshots/instagram_ui/instagram_home.jpg": "0415c2ddd7a54664943c3c69cf10f685",
"assets/assets/images/project/screenshots/instagram_ui/instagram_login_page.jpg": "7a7afb2f871afda5c28fa199393abdf5",
"assets/assets/images/project/screenshots/instagram_ui/instagram_search.jpg": "088327720044b7fbd615ed7434e6f580",
"assets/assets/images/project/screenshots/news_app/news_app_category.jpg": "798cafd9b4f81cf137c7c8d0dd1edc6e",
"assets/assets/images/project/screenshots/news_app/news_app_details.jpg": "90a511b744e8ac312d4ad44e231c3cd8",
"assets/assets/images/project/screenshots/news_app/news_app_drawer.jpg": "6ad75bb083125dcbfcbd309ab61777e4",
"assets/assets/images/project/screenshots/news_app/news_app_home.jpg": "43639d24407989f0dcd966283cb760df",
"assets/assets/images/project/screenshots/news_app/news_app_saved.jpg": "b4ecba7f3b51018bc84d8d898e282665",
"assets/assets/images/project/screenshots/news_app/news_app_search.jpg": "5dc7627be42d474cb5eeeab229d8b6d4",
"assets/assets/images/project/screenshots/notes_app/notes_app_add_note.png": "16739f9d27e68e995dc6c5c48f9a6c2f",
"assets/assets/images/project/screenshots/notes_app/notes_app_home.png": "7b6f95f1cb2256ff5f9be6d32312c6ee",
"assets/assets/images/project/screenshots/quiz_app/quiz_home.png": "5ac92e230a95bd833b91145ca0beff13",
"assets/assets/images/project/screenshots/quiz_app/quiz_questions.png": "2a2b176036b152bc06e5558dec2fdaa1",
"assets/assets/images/project/screenshots/quiz_app/quiz_questions_correct.png": "0bd823c1fdb383a238a6ea96ab37f248",
"assets/assets/images/project/screenshots/quiz_app/quiz_summary.png": "45bbfdf331689a048c10da26875a4e44",
"assets/assets/images/project/screenshots/todo_app/todo_app_add_Item.png": "90c46f30506560f7a43bd57ef2e006f4",
"assets/assets/images/project/screenshots/todo_app/todo_app_home.png": "d7428f4a09cf45aebd23bee1c8de1403",
"assets/assets/images/project/screenshots/zomato_ui/zomato_delivery_page.png": "b413a17c8961b494fab2f828f298507e",
"assets/assets/images/project/screenshots/zomato_ui/zomato_dining_page.png": "178d4ec5befe55cee72eb5ef7e5aa5a2",
"assets/assets/images/project/screenshots/zomato_ui/zomato_dishes_page.png": "738d100a5938d42f567cfae6dd14a3e9",
"assets/assets/images/project/screenshots/zomato_ui/zomato_dish_details.png": "83cbfec531bc610376881ba3a430248b",
"assets/assets/images/project/screenshots/zomato_ui/zomato_filter.png": "ccc391dd6102b49d8c493b1d3d1e7787",
"assets/assets/images/project/screenshots/zomato_ui/zomato_login.png": "5aff6dcf1ec823a177ec834518dc0330",
"assets/assets/images/project/screenshots/zomato_ui/zomato_menu.png": "843d18d81b1ad1a5acd108f043065cd6",
"assets/assets/images/project/screenshots/zomato_ui/zomato_profile.png": "5ee8bc697037a8ebf84c75d1aef66ea2",
"assets/assets/images/project/screenshots/zomato_ui/zomato_restaurant_page.png": "99fa0e7d3266021a4d8263d2f09617b8",
"assets/assets/images/schoologo.png": "f977cedcfe7c6bfe882ec210b97d7e50",
"assets/assets/images/sngist.png": "e6ded270776290282154294abfaadb5a",
"assets/FontManifest.json": "87de03ecc9865fb1e8d4050e8aa4cb40",
"assets/fonts/MaterialIcons-Regular.otf": "8d2912c245a70730bcd710695567a256",
"assets/NOTICES": "66a603627d8ac1e5c46472bb157d7c6b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/eva_icons_flutter/lib/fonts/Eva-Icons.ttf": "b3cfd6832181cbaa3c98988c49d34641",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "8867134ff4bcd0de7aefc15626ffdb31",
"icons/apple-touch-icon.png": "709f9d7ff23a2ae2d93af4202849ad42",
"icons/favicon.png": "aeda2397e0a8fb3735548e8a8ee16b29",
"icons/icon-192-maskable.png": "ab4377767208ce642a5ca62a90c6f3a1",
"icons/icon-192.png": "ab4377767208ce642a5ca62a90c6f3a1",
"icons/icon-512-maskable.png": "b67e5abced0aa3c6a845ed277c0f0a95",
"icons/icon-512.png": "b67e5abced0aa3c6a845ed277c0f0a95",
"index.html": "c06d1b552d3c700dcce4771dba4aa60b",
"/": "c06d1b552d3c700dcce4771dba4aa60b",
"main.dart.js": "dee471e974e34bf1479d69315a26d211",
"manifest.json": "2a2d5be403c80f2b4e9ed7e61f93dfdd",
"version.json": "86b1fdb296af4bcd299ac85078f1500d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
