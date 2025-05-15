document.addEventListener("DOMContentLoaded", function(){
    const playIcon = document.getElementById("play");
    const pauseIcon = document.getElementById ("pause");
    const seekSlider = document.getElementById("range");
    const currentTime = document.getElementById("current-time");
    const durationTime = document.getElementById("total-time");
    const audio = document.getElementById("audio");
    const songs = [
        {
            id: '1',
            title: 'FE!N',
            artist: 'Travis Scott',
            description: 'FE!N” is a bold, immersive album where Travis Scott blends futuristic trap with introspective themes and experimental sounds.',
            cover: '../assets/Collection/Pop/travis scott - UTOPIA.jpeg',
            file: '../assets/Songs/Travis Scott Ft. Playboi Carti & Sheck Wes – FEIN.mp3',
            lyric: `[Intro: Travis Scott & Sheck Wes]
                    Just come outside for the night (Yeah)
                    Take your time, get your light (Yeah)
                    Johnny Dang, yeah, yeah
                    I been out geekin' (Bitch)

                    [Chorus: Travis Scott]
                    FE!N, FE!N, FE!N, FE!N, FE!N (Yeah)
                    FE!N, FE!N, FE!N, FE!N, FE!N (Yeah)
                    FE!N, FE!N, FE!N, FE!N, FE!N
                    FE!N, FE!N (Yeah), FE!N, FE!N, FE!N

                    [Verse 1: Travis Scott & Sheck Wes]
                    The career's more at stake when you in your prime (At stake)
                    Fuck that paper, baby, my face on the dotted line (Dot, yeah)
                    I been flyin' out of town for some peace of mind (Yeah, yeah, bitch)
                    It's like always they just want a piece of mine (Ah)
                    I been focused on the future, never on right now (Ah)
                    What I'm sippin' not kombucha, either pink or brown (It's lit)
                    I'm the one that introduced you to the you right now (Mm, let's go)
                    Oh my God, that bitch bitin' (That bitch bitin')
                    Well, alright (Alright), tryna vibe (I'm tryna vibe this)
                    In the night, come alive
                    Ain't asleep, ain't a—, ain't a—, ain't-ain't

                    [Chorus: Travis Scott]
                    FE!N, FE!N, FE!N, FE!N, FE!N
                    FE!N, FE!N, FE!N, FE!N, FE!N
                    FE!N, FE!N, FE!N, FE!N, FE!N
                    FE!N, FE!N, FE!N, FE!N
                    FE!N, FE!N, FE!N, FE!N, FE!N
                    See Travis Scott Live
                    Get tickets as low as $30
                    You might also like
                    DELRESTO (ECHOES)
                    Beyoncé & Travis Scott
                    bad idea right?
                    Olivia Rodrigo
                    Used To Be Young
                    Miley Cyrus
                    [Bridge: Playboi Carti]
                    Schyeah, woah, what?
                    What?
                    (Homixide, Homixide, Homixide, Homixide)
                    What? (Yeah)
                    Woah, woah (Yeah, yeah)
                    (Homixide, Homixide, Homixide, Homixide)
                    Hit, yeah, hold up (Yeah)

                    [Verse 2: Playboi Carti]
                    Yeah, I just been poppin' my shit and gettin' it live, hold up (Shit)
                    Yeah, you try to come wrong 'bout this shit, we poppin' your tires, hold up (Shit)
                    Uh, hundred-round (Woah), feelin' like I'm on ten
                    Playin' both sides with these hoes (Hold up), shawty, I'm fuckin' your friend (Hold up)
                    I've been goin' crazy, shawty, I've been in the deep end
                    She not innocent, uh, she just tryna go

                    [Chorus: Travis Scott & Playboi Carti]
                    FE!N (Talkin' 'bout), FE!N, FE!N (Schyeah), FE!N, FE!N (Schyeah, oh, oh, what? Schyeah)
                    FE!N, FE!N (Schyeah), FE!N, FE!N, FE!N (Oh, oh)
                    FE!N, FE!N (Talkin' 'bout), FE!N, FE!N, FE!N, FE!N (Talkin' 'bout, let's go)

                    [Verse 3: Playboi Carti & Travis Scott]
                    I just been icin' my hoes, I just been drippin' my hoes (Drippin' my hoes)
                    This is a whole 'nother level, shawty (Oh), I got these hoes on they toes (Hoes on they toes)
                    I put the bitch on the road, she tryna fuck on the O, hold up, hold up
                    I got this ho with me, she tryna show me somethin', hold up, hold up (Oh)
                    I got flows for days, these niggas ain't on nothin', hold up, yeah (Oh)
                    Me and my boy locked in, you know we on one, hold up, uh (Slatt, slatt)
                    We in the spot goin' crazy until the sun up
                    You worried about that ho, that ho done chose up (Slatt, bitch-ass)
                    Uh, pistols all in the kitchen, can't give the zip code up, hold up, yeah, slatt (Wow)
                    FE!N, FE!N, FE!N (Huh? Huh? Huh? Huh? Yeah)
                    Why the fuck these niggas actin' like they know us?
                    00CACTUS, yeah, we towed up (Skrrt, skrrt), uh, yeah
                    Switch out the bag, these niggas get rolled up, hold up (It's lit), slatt
                    Everything hit, hold up, everything Homixide, Homixide (Homixide, Homixide, Homixide, Homixide)
                    [Outro: Travis Scott & Playboi Carti]
                    FE!N, FE!N, FE!N, FE!N, FE!N, FE!N (Homixide, Homixide, Homixide, Homixide, Homixide, Homixide, Homixide)`
            
            
        },
        {
            id:'2',
            title: 'WILDFLOWER',
            artist: 'Billie Eilish',
            description: 'Wildflower" is a folk-pop ballad by Billie Eilish about the guilt of falling for a friend’s ex. With soft acoustic tones and raw emotion, it showcases her intimate storytelling.',
            cover: '../assets/Collection/Pop/billiecover.jpeg',
            file: '../assets/Songs/Billie Eilish – WILDFLOWER.mp3',
            lyric: `[Verse 1]
                    Things fall apart
                    And time breaks your heart
                    I wasn't there, but I know
                    She was your girl
                    You showed her the world
                    But fell out of love and you both let go

                    [Pre-Chorus]
                    She was cryin’ on my shoulder
                    All I could do was hold her
                    Only made us closer until July
                    Now, I know that you love me
                    You don't need to remind me
                    I should put it all behind me, shouldn't I?

                    [Chorus]
                    But I see her in the back of my mind all the time
                    Like a fever, like I’m burning alive, like a sign
                    Did I cross the line?
                    (Mm) Hmm

                    [Verse 2]
                    Well, good things don't last (Good things don't last)
                    And life moves so fast (Life moves so fast)
                    I'd never ask who was better (I'd never ask who was better)
                    'Cause she couldn't be (Couldn't)
                    More different from me (Different)
                    Happy and free in leather (Happy)
                    See Billie Eilish Live
                    Get tickets as low as $207
                    You might also like
                    Guess featuring billie eilish
                    Charli xcx & Billie Eilish
                    Darling, I
                    Tyler, The Creator
                    Juno
                    Sabrina Carpenter
                    [Pre-Chorus]
                    And I know that you love me (You love me)
                    You don’t need to remind me (Remind me)
                    Wanna put it all behind me, but baby

                    [Chorus]
                    I see her in the back of my mind (Back of my mind) all the time (All the time)
                    Feels like a fever (Like a fever), like I’m burning alive (Burning alive), like a sign
                    Did I cross the line?

                    [Bridge]
                    You say no one knows you so well (Oh)
                    But every time you touch me, I just wonder how she felt
                    Valentine's Day, cryin’ in the hotel
                    I know you didn't mean to hurt me, so I kept it to myself

                    [Chorus]
                    And I wonder
                    Do you see her in the back of your mind in my eyes?

                    [Outro]
                    You say no one knows you so well
                    But every time you touch me, I just wonder how she felt
                    Valentine's Day, cryin' in the hotel
                    I know you didn’t mean to hurt me, so I kept it to myself`,
        },
        {
            id:'3',
            title: 'The Chase',
            artist: 'Heart 2 Hearts',
            description: 'A whimsical love song filled with dreamy imagery and fairytale-like devotion.',
            cover: '../assets/Collection/K-Pop/-H2Hthe chase.jpeg',
            file: '../assets/Songs/Hearts2Hwarts - The Chase.mp3',
            lyric: `[Verse 1: Yuha, Carmen]
                    Kkumi kkumeul kkuneunde
                    Beamy, beamy, geu biche
                    Hollin deusi ttara georeo
                    Hogisimeun jakkuman keojyeo
                    Igeol masyeo
                    Boge doelgeol
                    Neoman, yeah

                    [Pre-Chorus: Jiwoo, Ian & Ye-on, Stella & Yuha, Ye-on]
                    Paran ingkeu bitkkal sok heeomchyeo
                    Ppigeokdaeneun chalky, chalky
                    Bunpireun gajireonhi
                    Uri yaegireul badasseugetji
                    I'll make you say my name
                    Eotteoke an geurae?
                    I love the way, you love the chase

                    [Chorus: Juun, Ian]
                    Hop, nae moheomui
                    Cheotgeoreumeul didyeo
                    Ontong susukkekki
                    Nan deo algo sipeo
                    Crop, nae mamdaero
                    Jallanaen hwansangui jogak
                    Sparkle, sparkle
                    Mwongareul bon geot gata
                    See upcoming pop shows
                    Get tickets for your favorite artists
                    You might also like
                    Gnarly
                    KATSEYE


                    [Verse 2: Stella, Yuha, Yuha & Carmen, Carmen]
                    Geusae keobeorin geolkka? (Hey)
                    Seolmyeonghal su eomneunde (Hey)
                    On himeul dahae nan dallyeo
                    Meomchwo seo itgo
                    Sipji ana (Keodaran, 'motion)
                    I keodaran
                    Emotion, yeah, yeah

                    [Pre-Chorus: Ian, Jiwoo & Yuha, Ye-on & Stella, Stella]
                    Tteodanineun quiz geu teumsae
                    Soneul ppeodeo nakka, jingle, jingle
                    Yeolsoeneun yoranseure (Yeah)
                    Muneul yeoreobwa jolladaegetji
                    I'll make you say my name (My name)
                    Jumunboda ganghae (Ganghae)
                    I love the way, you love the chase

                    [Chorus: Jiwoo, A-na]
                    Hop, nae moheomui
                    Cheotgeoreumeul didyeo
                    Ontong susukkekki
                    Nan deo algo sipeo
                    Crop, nae mamdaero
                    Jallanaen hwansangui jogak
                    Sparkle, sparkle
                    Mwongareul bon geot gata
                    [Bridge: Stella, Ye-on, Yuha]
                    Baby, we got what you need
                    Our love is so sweet, it pops like candy, yeah
                    Haetsare nun gamanhi gameun chae
                    Nae mamdaero dallyeoga, nae sesangeul gajyeobwa

                    [Post-Bridge: Jiwoo & Juun, Carmen]
                    Come and get ya, come and get ya, come and get ya, yeah (Yeah)
                    It's forever, it's forever, it's forever, yeah (Yeah)
                    'Til the end, hwansange ppajil neowa naya, maja
                    Kkumi kkumkkugil sijakae, yeah (Ah-ooh)

                    [Chorus: Ian, Jiwoo, A-na, Juun, (Carmen)]
                    Nae moheomui (Ooh)
                    Cheotgeoreumiya (Oh)
                    Nae mamdaero (Oh, no, woah, woah)
                    Gago sipeo, kkumeun sijakdwaesseo

                    [Post-Chorus: All, Ian & Ye-on, Yuha]
                    Hop, nae moheomui (Paran ingkeu bitkkal sogeul; Ah)
                    Cheotgeoreumeul (Tteodanineun quiz geu teumeul; Ah)
                    Nae mamdaero (Ah)
                    I love the way, you love the chase`,
        },

        {
            id:'4',
            title: 'Still WIth You',
            artist: 'Jungkook',
            description: 'A nostalgic track reminiscing past memories through voicemails.',
            cover: '../assets/Collection/K-Pop/jung kook - still with you.jpeg',
            file: '../assets/Songs/(BTS) Jungkook - Still With You.mp3',
            lyric: `[Intro]
                    Nal seuchineun geudaeui yeoteun geu moksori
                    Nae ireumeul han beonman deo bulleojuseyo
                    Eoreobeorin noeul arae meomchwo seoitjiman
                    Geudae hyanghae han georeumssik georeogallaeyo
                    Still with you

                    [Verse 1]
                    Eoduunbang jomyeong hana eopsi
                    Iksukaejimyeon an doeneunde
                    Geuge tto iksukae
                    Najimagi deullineun
                    I eeokeon sori
                    Igeorado eopseumyeon
                    Na jeongmal muneojil geot gata

                    [Pre Chorus 1]
                    Hamkke utgo hamkke ulgo
                    I dansunhan gamjeongdeuri
                    Naegen jeonbuyeonna bwa
                    Eonjejjeumilkka
                    Dasi geudael majuhandamyeon
                    Nuneul bogo malhallaeyo
                    Bogo sipeosseoyo

                    [Chorus]
                    Hwangholhaetdeon gieok soge
                    Na hollo chumeul chwodo biga naerijana
                    I angaega geotil ttaejjeum
                    Jeojeun ballo dallyeogal ge
                    Geuttae nal anajwo
                    See upcoming pop shows
                    Get tickets for your favorite artists
                    You might also like
                    Jung Kook - Still With You (English Translation)
                    Genius English Translations
                    The Tortured Poets Department
                    Taylor Swift
                    So Long, London
                    Taylor Swift
                    [Verse 2]
                    Jeo dari oerowo boyeoseo
                    Bamhaneure hwanhage ulgo inneun geot gataseo
                    Eonjenga achimi oneun geol almyeonseodo
                    Byeolcheoreom neoui haneure meomulgo sipeosseo

                    [Pre Chorus 2]
                    Harureul geu sunganeul
                    Ireoke doel geol aratdamyeon
                    Deo damadwosseul tende
                    Eonjejjeumilkka
                    Dasi geudael majuhandamyeon
                    Nuneul bogo malhallaeyo
                    Bogo sipeosseoyo

                    [Chorus]
                    Hwangholhaetdeon gieok soge
                    Na hollo chumeul chwodo biga naerijana
                    I angaega geotil ttaejjeum
                    Jeojeun ballo dallyeogal ge
                    Geuttae nal jabajwo

                    [Outro]
                    Nal baraboneun huimihan miso dwipyeone
                    Areumdaun boratbicheul geuryeobollaeyo
                    Seoro balgeoreumi an majeul sudo itjiman
                    Geudaewa hamkke i gireul geotgo sipeoyo
                    Still with you`,
        },

        {
            id:'5',
            title: 'Tempo',
            artist: 'EXO',
            description: 'A bold, rhythmic track about not letting anyone mess with their loves rhythm.',
            cover: '../assets/Collection/K-Pop/eco - tempo.jpeg',
            file: '../assets/Songs/EXO - Tempo.MP3',
            lyric: `[Intro: Chen, Baekhyun, Kai]
                    I can't believe
                    Gidaryeotdeon ireon neukkim (Oh)
                    Naman deutgo sipeun geunyeoneun naye mellodi
                    Haru jongil go on and on and oh
                    Tteonaji anke geunyeol nae gyeote
                    Yeah, uh

                    [Chorus: All]
                    Don't mess up my tempo
                    Deureobwa igeon chungbunhi (Nah)
                    I said don't mess up my tempo
                    Geunyeoye mameul humchil beat, uh
                    Eodiedo eopseul rideume matchwo 1, 2, 3, uh (Yeah)
                    Don't mess up my tempo
                    Meomchul su eomneun ikkeullim oh

                    [Post-Chorus: Xiumin, Baekhyun]
                    Maehokjeogin neon lovely
                    Teum eopsi jopyeojin geori
                    Bulgyuchikaejineun heartbeat
                    Jamsi nuneul gama trust me (Woo-hoo)

                    [Verse 1: Sehun, Chen & Sehun, Chen, (Baekhyun), ((Chanyeol))]
                    Bakkeuro nagal chaebi miri haedwo are you ready? ((Look))
                    Oneureun naega kaeri dosi na saiye kemi (Aw)
                    Imi nawa nokon mwoga changpihae ma' boo (Ah)
                    Eojeongjjeong eobeobeo hal pillyo eopdago ((Coming out))
                    Chaenggil geon eopseuni sonjaba my lady
                    Ganeun gilmada redeu kapet tto reonweiingeol
                    Balgeoreumi namdalla (Swish)
                    Jigeum i sokdo matchwoboja tempo, ah
                    See upcoming pop shows
                    Get tickets for your favorite artists
                    You might also like
                    My Boy Only Breaks His Favorite Toys
                    Taylor Swift
                    So Long, London
                    Taylor Swift
                    But Daddy I Love Him
                    Taylor Swift
                    [Pre-Chorus: Suho, Suho & Baekhyun, Chanyeol]
                    Baby girl achimeul seollege haneun morning call
                    Maeil bwado bogo sipeun mamingeol
                    Jigeumbuteo nawa let's get down (Get down!)
                    Modeun geosi wanbyeokage joa
                    So don't slow it up for me

                    [Hook: All]
                    Don't mess up my tempo
                    Deureobwa igeon chungbunhi
                    I said don't mess up my tempo
                    Geunyeoye mameul humchil beat, uh
                    Eodiedo eopseul rideume matchwo 1, 2, 3, uh
                    Don't mess up my tempo
                    Meomchul su eomneun ikkeullim ya

                    [Post-Chorus: Baekhyun, Chen]
                    Juwil dulleobwa lovely (Oh-oh-oh)
                    Teum eopsi jopyeojin geori
                    Neoege matchwojin heartbeat
                    Hago sipeun daero teach me

                    [Verse 2: Chanyeol, D.O, Kai]
                    Uh (Woo-ooh) yeogin nae guyeok don't test me (Oh yeah)
                    Honja itgi eosaekadamyeon bonaejwo message
                    Now you got me flexin' (Flexin')
                    Juwil dulleobwa
                    Neol boneun deulleorideul sok widaehan gaecheubi (Hold on)
                    (Wow) I'm doing alright baby girl, you don't know (You don't)
                    Chiwo ne meori wie mureumpyo (What?)
                    Nae sajeone eomneun L.I.E
                    Neoneun imi jayeonseureopge matchugo isseo nae tempo
                    [Pre-Chorus: D.O, Suho, Chen, (Baekhyun)]
                    Baby girl (Baby girl)
                    Nae eokkaee saljjak gidaen geudaeye (Gidaen geudaeye)
                    Aryeonhan hyanggiga dasi nae mame (Nae mame baby)
                    Soyongdorichimyeo morachinda
                    Idaero nan yeongwonhago sipda
                    So don't mess up my tempo baby
                    Don't slow it up for me

                    [Hook: Kai, Chanyeol, Baekhyun]
                    Don't mess up my tempo
                    Don't mess up my tempo
                    Don't mess up my tempo
                    Don't mess up my (Whoa, uh)
                    Don't mess up my tempo
                    Don't mess up my tempo
                    Don't mess up my tempo

                    [Bridge: Chen, D.O, Chen/D.O, (Baekhyun), ((Sehun))]
                    Nae nuneul barabogo malhae
                    Naye gwitgaeman dake (Ooh, mhm)
                    Naman saranghanda malhae
                    Nabakke eopdago malhae
                    (Deo isang heundeulliji anke) (Oh-oh-oh)
                    (Jeoldae neol ppaetgiji anke) (Oh-oh-oh)
                    (Nugudo geondeul su eopge) (Whoa)
                    ((Nae gyeote neoreul jikilge))
                    [Interlude 1: Chanyeol, Suho, Baekhyun, (Xiumin)]
                    Dum-dum-dum-dum
                    Dum-dum-dum-dum-dum
                    Nae maeumi neukkyeojini (Neukkyeojini)
                    Nareul gamssa aneun yuilhan namanye savior
                    (Oh-oh-oh-oh, no) modu geureon neol baraboge dwae

                    [Interlude 2: Baekhyun, Suho, D.O, (Chen)]
                    I can't believe
                    I can’t believe (I can't believe)
                    Gidaryeotdeon ireon neukkim (Ireon neukkim)
                    Naman deutgo sipeun geunyeoneun naye mellodi
                    Haru jongil go on and on and oh
                    Tteonaji anke geunyeol nae gyeote

                    [Chorus: All, Chen]
                    (Yeah, yeah, yeah)
                    Don't mess up my tempo
                    Ttarawa igeon chungbunhi
                    (Don't mess up my tempo baby)
                    I said don't mess up my tempo
                    Wanjeonhi dareun saegye beat uh
                    (My tempo, hoo-hoo)
                    Eodiedo eopseul ireon wanbyeokan 1, 2, 3, uh
                    (Wanbyeokan 1, 2, 3, yeah)
                    Don't mess up my tempo
                    Meomchul su eomneun ikkeullim (No)`,
        },

        {
            id:'6',
            title: 'Kill Bill',
            artist: 'SZA',
            description: 'A bold, rhythmic track about not letting anyone mess with their loves rhythm.',
            cover: '../assets/Collection/R&B/sza - low.jpg',
            file: '../assets/Songs/SZA - Kill Bill.mp3',
            lyric: `[Verse 1]
                    I'm still a fan even though I was salty
                    Hate to see you with some other broad, know you happy
                    Hate to see you happy if I'm not the one drivin'

                    [Pre-Chorus]
                    I'm so mature, I'm so mature
                    I'm so mature, I got me a therapist to tell me there's other men
                    I don't want none, I just want you
                    If I can't have you, no one should

                    [Chorus]
                    I might
                    I might kill my ex, not the best idea
                    His new girlfriend's next, how'd I get here?
                    I might kill my ex, I still love him though
                    Rather be in jail than alone

                    [Verse 2]
                    I get the sense that it's a lost cause
                    I get the sense that you might really love her
                    This text gon' be evidence, this text is evidence
                    I tried to ration with you, no murders or crime of passion, but damn
                    You was out of reach
                    You was at the farmer's market with your perfect peach
                    Now I'm in the basement plannin' home invasion
                    Now you layin' face-down, got me singin' over a beat
                    See upcoming R&B shows
                    Get tickets for your favorite artists
                    You might also like
                    Crybaby
                    SZA
                    A&W
                    Lana Del Rey
                    MOONLIGHT SUNRISE
                    TWICE
                    [Pre-Chorus]
                    I'm so mature, I'm so mature
                    I'm so mature, I got me a therapist to tell me there's other men
                    I don't want none, I just want you
                    If I can't have you, no one will

                    [Chorus]
                    I might (I)
                    I might kill my ex, not the best idea
                    His new girlfriend's next, how'd I get here?
                    I might kill my ex, I still love him though
                    Rather be in jail than alone

                    [Bridge]
                    I did it all for love (Love)
                    I did it all on no drugs (Drugs)
                    I did all of this sober
                    I did it all for us, oh
                    I did it all for love (Love)
                    I did all of this on no drugs (Drugs)
                    I did all of this sober
                    Don't you know I did it all for us? (I'm gon' kill your ass tonight)

                    [Chorus]
                    Oh, I just killed my ex (My ex, oops), not the best idea (Idea)
                    Killed his girlfriend next, how'd I get here? (He left me no choice)
                    I just killed my ex (My ex), I still love him though (I do)
                    Rather be in Hell than alone`,
        },

        {
            id:'7',
            title: 'Creepin\'',
            artist: 'Metroboomin',
            description: 'A sharp, catchy tune about unreciprocated feelings and intoxicated confessions.',
            cover: '../assets/Collection/R&B/metroboomin - creepin.jpeg',
            file: '../assets/Songs/Metro Boomin - Creepin.mp3',
            lyric: `[Intro]
                    (Just can't believe this, man)
                    (Metro Boomin want some more, nigga)

                    [Verse 1: The Weeknd]
                    Somebody said they saw you
                    The person you were kissing wasn't me
                    And I would never ask you
                    I just kept it to myself

                    [Chorus: The Weeknd]
                    I don't wanna know
                    If you're playin' me, keep it on the low
                    'Cause my heart can't take it anymore
                    And if you creepin', please don't let it show
                    Oh, baby, I don't wanna know

                    [Verse 2: The Weeknd]
                    I think about it when I hold you
                    When lookin' in your eyes, I can't believe
                    And I don't need to know the truth
                    Baby, keep it to yourself

                    [Chorus: The Weeknd]
                    I don't wanna know
                    If you're playin' me, keep it on the low
                    'Cause my heart can't take it anymore
                    And if you creepin', please don't let it show
                    Oh, baby, I don't wanna know
                    See Metro Boomin Live
                    Get tickets as low as $79
                    You might also like
                    Low
                    SZA
                    Did you know that there’s a tunnel under Ocean Blvd
                    Lana Del Rey
                    Nobody Gets Me
                    SZA
                    [Bridge: Mario Winans, The Weeknd, Both]
                    Did he touch you better than me? (Touch you better than me)
                    Did he watch you fall asleep? (Watch you fall asleep)
                    Did you show him all those things that you used to do to me?
                    If you're better off that way (Better off that way)
                    There ain't more that I can say (More that I can say)
                    Just go on and do your thing and don't come back to me

                    [Verse 3: 21 Savage]
                    Woah, woah, woah, 21
                    Had me crushin', I was cuffin' like the precinct
                    How you go from housewife to a sneaky link?
                    Got you riding 'round in all type of Benzes and Rovers
                    Girl, you used to ride in the rinky-dink
                    I'm the one put you in Eliantte (On God)
                    Fashion Nova model, I put you on the runway (On God)
                    You was rockin' Coach bags, got you Chane'-ne'
                    Side bitch in Frisco, I call her my Bay-bae (21)
                    I got a girl, but I still feel alone (On God)
                    If you playin' me that mean my home ain't home (On God)
                    Havin' nightmares of goin' through your phone (21)
                    Can't even record, you got me out my zone

                    [Chorus: The Weeknd]
                    I don't wanna know
                    If you're playin' me, keep it on the low
                    'Cause my heart can't take it anymore
                    And if you creepin', please don't let it show
                    Oh, baby, I don't wanna know
                    If you're playin' me, keep it on the low
                    'Cause my heart can't take it anymore
                    And if you creepin', please don't let it show
                    Oh, baby, I don't wanna know
                    [Outro: 21 Savage & The Weeknd]
                    If you creepin', just don't let me find out (On God)
                    Get a hotel, never bring 'em to the house (On God)
                    If you're better off that way
                    Baby, all that I can say
                    If you're gonna do your thing, then don't come back to me`,
        },

        {
            id:'8',
            title: 'Intro',
            artist: 'Ariana Grande',
            description: 'a short, atmospheric track with soft melodies and dreamy vocals, setting a romantic and emotional tone.',
            cover: '../assets/Collection/R&B/ariana - intro',
            file: '../assets/Songs/Ariana Grande – intro (end of the world).mp4a',
            lyric: `[Intro]
                    Uh

                    [Verse]
                    How can I tell if I'm in the right relationship?
                    Aren't you really s'posed to know that shit?
                    Feel it in your bones and own that shit? I don't know
                    Then I had this interaction I've been thinkin' 'bout for like five weeks
                    Wonder if he's thinkin' 'bout it too and smiling
                    Wonder if he knows that that's been what's inspirin' me
                    Wonder if he's judgin' me like I am right now

                    [Pre-Chorus]
                    I don't care
                    I'd rather tell the truth (Truth)
                    Than make it worse for you, mm (You)

                    [Chorus]
                    If the sun refused to shine
                    Baby, would I still be your lover?
                    Would you want me there?
                    If the moon went dark tonight
                    And if it all ended tomorrow
                    Would I be the one on your mind, your mind, your mind?
                    And if it all ended tomorrow
                    Would you be the one on mine?`,
        },

        {
            id:'9',
            title: 'PUSH 2 START',
            artist: 'tyla',
            description: 'an energetic blend of amapiano, pop, and R&B, using car metaphors to explore love and attraction.',
            cover: '../assets/Collection/R&B/tyla - pish 2 star.jpeg',
            file: '../assets/Songs/Tyla – PUSH 2 START.mp3',
            lyric: `[Intro]
                    Ayy
                    Ayy, yeah-yeah, yeah-yeah-yeah, yeah-yeah-yeah
                    Oh

                    [Verse]
                    The way we move, uh, skin onto skin
                    No separation, need no conversation, nah, nah, nah
                    Uh, on everything
                    It's automatic, goin' zero to a hun-na-na
                    Ride, and wishin' the wheels would fall off
                    Time is tickin', it's takin' you too long
                    Right before I decide to go home

                    [Chorus]
                    Act like you heard me
                    Only serve it up if you deserve me, yeah
                    Pull up and earn me (Pusha, pusha)
                    Push to start (Pusha, pusha)
                    Act like you heard me
                    Only serve it up if you deserve me, yeah
                    Pull up and earn me (Pusha, pusha)
                    Push to start (Pusha, pusha)

                    [Post-Chorus]
                    Mm, pushin' on my buttons with no hesitation ('Tation)
                    Gas me up, give me motivation ('Vation)
                    So tell me where we goin', pick a destination ('Nation)
                    Gas me up, give me motivation now ('Vation)
                    Pushin' on my buttons with no hesitation ('Tation)
                    Gas me up, give me motivation ('Vation)
                    So tell me where we goin', pick a destination ('Nation)
                    Gas me up, give me motivation now (Nah)
                    See upcoming pop shows
                    Get tickets for your favorite artists
                    You might also like
                    Sympathy is a knife featuring ariana grande
                    Charli xcx & Ariana Grande
                    St. Chroma
                    Tyler, The Creator
                    Sticky
                    Tyler, The Creator
                    [Bridge]
                    Come give me life, and I'll change yours
                    Who needs signs? I say, "Floor it"
                    On a high when we load it
                    Hold me, load me, hold me

                    [Chorus]
                    Act like you heard me
                    Only serve it up if you deserve me, yeah
                    Pull up and earn me (Pusha, pusha)
                    Push to start (Pusha, pusha)
                    Act like you heard me
                    Only serve it up if you deserve me, yeah
                    Pull up and earn me (Pusha, pusha)
                    Push to start (Pusha, pusha)

                    [Post-Chorus]
                    Mm, pushin' on my buttons with no hesitation ('Tation)
                    Gas me up, give me motivation ('Vation)
                    So tell me where we goin', pick a destination ('Nation)
                    Gas me up, give me motivation now ('Vation)
                    Pushin' on my buttons with no hesitation ('Tation)
                    Gas me up, give me motivation ('Vation)
                    So tell me where we goin', pick a destination ('Nation)
                    Gas me up, give me motivation now (Nah)
                    [Outro]
                    Give me life, I'll change yours
                    Who needs signs? I say, "Floor it"
                    On a high when we load it
                    Oh`,
        },

         {
            id:'10',
            title: 'Finesse',
            artist: 'Bruno Mars',
            description: 'a fun, funky track celebrating confidence and style with a retro 90s vibe.',
            cover: '../assets/Collection/R&B/finnese.jpeg',
            file: '../assets/Songs/Bruno Mars – Finesse.flac',
            lyric: `[Intro]
                    Ayy
                    Ayy, yeah-yeah, yeah-yeah-yeah, yeah-yeah-yeah
                    Oh

                    [Verse]
                    The way we move, uh, skin onto skin
                    No separation, need no conversation, nah, nah, nah
                    Uh, on everything
                    It's automatic, goin' zero to a hun-na-na
                    Ride, and wishin' the wheels would fall off
                    Time is tickin', it's takin' you too long
                    Right before I decide to go home

                    [Chorus]
                    Act like you heard me
                    Only serve it up if you deserve me, yeah
                    Pull up and earn me (Pusha, pusha)
                    Push to start (Pusha, pusha)
                    Act like you heard me
                    Only serve it up if you deserve me, yeah
                    Pull up and earn me (Pusha, pusha)
                    Push to start (Pusha, pusha)

                    [Post-Chorus]
                    Mm, pushin' on my buttons with no hesitation ('Tation)
                    Gas me up, give me motivation ('Vation)
                    So tell me where we goin', pick a destination ('Nation)
                    Gas me up, give me motivation now ('Vation)
                    Pushin' on my buttons with no hesitation ('Tation)
                    Gas me up, give me motivation ('Vation)
                    So tell me where we goin', pick a destination ('Nation)
                    Gas me up, give me motivation now (Nah)
                    See upcoming pop shows
                    Get tickets for your favorite artists
                    You might also like
                    Sympathy is a knife featuring ariana grande
                    Charli xcx & Ariana Grande
                    St. Chroma
                    Tyler, The Creator
                    Sticky
                    Tyler, The Creator
                    [Bridge]
                    Come give me life, and I'll change yours
                    Who needs signs? I say, "Floor it"
                    On a high when we load it
                    Hold me, load me, hold me

                    [Chorus]
                    Act like you heard me
                    Only serve it up if you deserve me, yeah
                    Pull up and earn me (Pusha, pusha)
                    Push to start (Pusha, pusha)
                    Act like you heard me
                    Only serve it up if you deserve me, yeah
                    Pull up and earn me (Pusha, pusha)
                    Push to start (Pusha, pusha)

                    [Post-Chorus]
                    Mm, pushin' on my buttons with no hesitation ('Tation)
                    Gas me up, give me motivation ('Vation)
                    So tell me where we goin', pick a destination ('Nation)
                    Gas me up, give me motivation now ('Vation)
                    Pushin' on my buttons with no hesitation ('Tation)
                    Gas me up, give me motivation ('Vation)
                    So tell me where we goin', pick a destination ('Nation)
                    Gas me up, give me motivation now (Nah)
                    [Outro]
                    Give me life, I'll change yours
                    Who needs signs? I say, "Floor it"
                    On a high when we load it
                    Oh`,
        },




    ];
    const params = new URLSearchParams(window.location.search);
    const songId = params.get('id');
    const song = songs.find(s=> s.id == songId);
    //load songs
    function loadSongFromDetail() {
        audio.src = song.file;
        audio.load();
        audio.play();
        playIcon.style.display = "none";
        pauseIcon.style.display = "inline";
    }
    //play pause
    playIcon.addEventListener("click", ()=>{
        audio.play();
        playIcon.style.display = "none";
        pauseIcon.style.display = "inline";
    });
    pauseIcon.addEventListener("click", ()=> {
        audio.pause();
        playIcon.style.display = "inline";
        pauseIcon.style.display = "none";
    });

    ///fungsi format detik ke menit:detik
    function formatTime(seconds) {
        const mins = Math.floor(seconds/60);
        const secs = Math.floor (seconds % 60);
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    }
    //Update time & slider
    audio.addEventListener("timeupdate", ()=>{
        seekSlider.value=(audio.currentTime / audio.duration) * 100;
        currentTime.textContent = formatTime(audio.currentTime);
    });

    //slider ke posisi tertentu dan lagu ikut berubah
    seekSlider.addEventListener("input", ()=>{
        if(!isNaN(audio.duration)){
            const previewTime = (seekSlider.value/100) * audio.duration;
            currentTime.textContent = formatTime(previewTime);
        }
    })
    seekSlider.addEventListener("change", () =>{
        if (!isNaN(audio.duration)){
            const seekTo = (seekSlider.value/100) * audio.duration;
            audio.currentTime = seekTo;
        }
    })

    audio.addEventListener("loadedmetadata", () =>{
        durationTime.textContent= formatTime(audio.duration);
    })
    if (song){
        document.querySelectorAll('.song-name-value').forEach(el => {
            el.textContent = song.title;
        });
        document.querySelectorAll('.song-artist-value').forEach(el => {
            el.textContent = song.artist;
        });
        document.querySelector('.song-desc-value').textContent = song.description;
        document.querySelectorAll('.song-cover').forEach(el => {
            el.src = song.cover;
        });
        document.querySelector('.lyrics').textContent = song.lyric;
        loadSongFromDetail();
    }

    
})