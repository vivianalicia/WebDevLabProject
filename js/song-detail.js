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
            file: '../assets/Songs/',
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
            file: '../assets/Songs/Bruno Mars – Finesse.flac.mp3',
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
            id:'11',
            title: '13',
            artist: 'Lany',
            description: '"13" by LANY is a heartfelt song that explores the pain of a fading relationship and the lingering emotions after love has changed. With its melancholic lyrics and dreamy synth-pop sound, the track captures the vulnerability and confusion of holding on to memories that no longer feel the same.',
            cover: '../assets/Home/Lany-mobile.jpeg',
            file: '../assets/Songs/LANY - 13 (Official Audio).mp3',
            lyric: ` It could change but this feels like, like the calm before the storm
                        Not that I don't wanna try but I've been here before
                        Friends in town, phone's at home, I tell myself it's fine
                        Can't remember how you taste, slept alone too many nights

                        Where did we go wrong? I know we started out alright
                        Where did we go wrong? I swear I knew we'd last this time
                        Where did we go wrong? Oh did you, did you change your mind?
                        How could you change your mind?
                        Who got inside your mind?
                        Where did we go wrong? I know we started out alright
                        Where did we go wrong? I swear I knew we'd last this time
                        Where did we go wrong? Oh did you, did you change your mind?
                        How could you change your mind?
                        Who got inside your mind?

                        Half my clothes are at your house and I don't want them back
                        The smell of you is way too much, not gonna put my heart through that
                        I don't know how much time we got, I don't know how much to say
                        I don't know, tell me what you want, I want you to want me to stay

                        Where did we go wrong? I know we started out alright
                        Where did we go wrong? I swear I knew we'd last this time
                        Where did we go wrong? Oh did you, did you change your mind?
                        How could you change your mind?
                        Who got inside your mind?
                        Where did we go wrong? I know we started out alright
                        Where did we go wrong? I swear I knew we'd last this time
                        Where did we go wrong? Oh did you, did you change your mind?
                        How could you change your mind?
                        Who got inside your mind?

                        La la la la la la la
                        La la la la oh yeah
                        La la la la la la la
                        Ooh ooh ooh

                        Where did we go wrong? I know we started out alright
                        Where did we go wrong? I swear I knew we'd last this time
                        Where did we go wrong? Oh did you, did you change your mind?
                        How could you change your mind?
                        Who got inside your mind?
                        Where did we go wrong? I know we started out alright
                        Where did we go wrong? I swear I knew we'd last this time
                        Where did we go wrong? Oh did you, did you change your mind?
                        How could you change your mind?
                        Who got inside your mind?
            `
        },
        {
            
            id:'13',
            title: 'Supernova',
            artist: 'Aespa',
            description: '"The upbeat electronic-pop “Supernova” serves as the pre-release and second title track to Aespa’s 1st full length album “Armageddon – The 1st Album.” ',
            cover: '../assets/Home/aespamobile.jpeg',
            file: '../assets/Songs/Supernova - aespa (Audio).mp3',
            lyric: `[Intro: Karina]
                    I'm like some kind of supernova
                    Watch out

                    [Verse 1: Ningning, Karina, Dem Jointz]
                    Look at me go
                    재미 좀 볼
                    빛의 core
                    So ho-o-ot, ho-o-o-ot
                    문이 열려
                    서로의 존재를 느껴
                    마치 discord
                    날 닮은 너 너 누구야 (Incoming; Drop)

                    [Pre-Chorus: Winter, Ningning, Giselle]
                    사건은 다가와, ah, oh, ayy
                    거세게 커져가, ah, oh, ayy
                    That tick, that tick, tick bomb
                    That tick, that tick, tick bomb
                    감히 건드리지 못할 걸
                    누구도 말이야
                    지금 내 안에선
                    Su-su-su-supernova
                    See upcoming pop shows
                    Get tickets for your favorite artists
                    You might also like
                    WOKE UP
                    XG
                    LUNCH
                    Billie Eilish
                    CHIHIRO
                    Billie Eilish
                    [Chorus: All, Winter]
                    Nova
                    Can't stop hyperstellar
                    원초 그걸 찾아
                    Bring the light of a dying star
                    불러낸 내 우주를 봐 봐
                    Supernova

                    [Interlude: Karina, Giselle]
                    Ah, body bang (Bang, bang, bang, bang, bang, bang)
                    Make it feel too right

                    [Verse 2: Karina, Giselle, Winter]
                    휩쓸린 에너지, it's so special
                    잔인한 queen 이며 scene 이자 종결
                    이토록 거대한 내 안의 explosion
                    내 모든 세포 별로부터 만들어져 (Under my control, ah)

                    [Pre-Chorus: Ningning, Karina, Giselle]
                    질문은 계속돼, ah, oh, ayy
                    우린 어디서 왔나, oh, ayy
                    느껴 내 안에선 (Huh)
                    Su-su-su-supernova

                    [Chorus: All, Ningning]
                    Nova
                    Can't stop hyperstellar
                    원초 그걸 찾아
                    Bring the light of a dying star
                    불러낸 내 우주를 봐 봐
                    Supernova
                    [Bridge: Winter, Giselle, Ningning]
                    보이지 않는 힘으로
                    네게 손 내밀어 볼까
                    가능한 모든 가능성
                    무한 속의 너를 만나
                    It's about to bang, bang
                    Don't forget my name

                    [Interlude: All, Karina]
                    Su-su-su-supernova
                    사건은 다가와, ah, oh, ayy
                    거세게 커져가, ah, oh, ayy
                    질문은 계속돼, ah, oh, ayy
                    우린 어디서 왔나, oh, ayy
                    사건은 다가와, ah, oh, ayy
                    거세게 커져가, ah, oh, ayy
                    Tell me, tell me, tell me, oh, ayy
                    우린 어디서 왔나, oh, ayy
                    우린 어디서 왔나, oh, ayy

                    [Chorus]
                    Nova (Nova)
                    Can't stop hyperstellar (Hyperstellar)
                    원초 그걸 찾아
                    Bring the light of a dying star (Light of a dying star)
                    불러낸 내 우주를 봐 봐 (All the way)
                    Supernova (Hey-huh)
                    [Refrain]
                    사건은 다가와 ah, oh, ayy (Nu star)
                    거세게 커져가 ah, oh, ayy
                    질문은 계속돼 ah, oh, ayy (Nova)
                    우린 어디서 왔나 oh, ayy
                    사건은 다가와 ah, oh, ayy (Yeah-yeah-yeah-yeah-nova)
                    거세게 커져가 ah, oh, ayy (Nova)
                    질문은 계속돼 ah, oh, ayy (Bring thе light of a dying star)

                    [Outro: Winter]
                    Supernova`
        },
        {
            id:'14',
            title: 'Treasure',
            artist: 'Bruno Mars',
            description: '“Treasure” is a song by American singer-songwriter Bruno Mars. The song was written by Mars, Philip Lawrence, Ari Levine, and Phredley Brown, while production was handled by the former three as members of The Smeezingtons ',
            cover: '../assets/Home/brunomobile.jpg',
            file: '../assets/Songs/Treasure.mp3',
            lyric: `[Intro]
                    Baby squirrel, you's a sexy motherfucker

                    [Verse 1]
                    Gimme your, gimme your, gimme your attention, baby
                    I gotta tell you a little somethin' about yourself
                    You're wonderful, flawless, ooh, you a sexy lady
                    But you walk around here like you wanna be someone else

                    [Pre-Chorus]
                    Oh, woah
                    I know that you don't know it
                    But you're fine, so fine (Fine, so fine)
                    Oh, woah
                    Oh, girl, I'm gonna show you
                    When you're mine, oh, mine (Mine, oh, mine)

                    [Chorus]
                    Treasure
                    That is what you are
                    Honey, you're my golden star
                    You know you can make my wish come true
                    If you let me treasure you
                    If you let me treasure you
                    Oh, oh, oh
                    See Bruno Mars Live
                    Get tickets as low as $494
                    You might also like
                    So Long, London
                    Taylor Swift
                    The Tortured Poets Department
                    Taylor Swift
                    THE HEART PART 6
                    Drake
                    [Verse 2]
                    Pretty girl, pretty girl, pretty girl, you should be smilin'
                    A girl like you should never look so blue
                    You're everything I see in my dreams
                    I wouldn't say that to you if it wasn't true

                    [Pre-Chorus]
                    Oh, woah
                    I know that you don't know it
                    But you're fine, so fine (Fine, so fine)
                    Oh, woah
                    Oh, girl, I'm gonna show you
                    When you're mine, oh, mine (Mine, oh, mine)

                    [Chorus]
                    Treasure
                    That is what you are
                    Honey, you're my golden star
                    You know you can make my wish come true
                    If you let me treasure you
                    If you let me treasure you
                    Oh, oh, oh

                    [Bridge]
                    You are my treasure
                    You are my treasure
                    You are my treasure
                    Yeah, you, you, you, you are
                    You are my treasure
                    You are my treasure
                    You are my treasure
                    Yeah, you, you, you, you are
                    [Chorus]
                    Treasure (You are my treasure)
                    That is what you are (You are my treasure)
                    (You are my treasure)
                    Honey, you're my golden star (You, you, you are)
                    (You are my treasure)
                    You know you can make my wish come true (You are my treasure)
                    (You are my treasure)
                    If you let me treasure you (You, you, you are)
                    (You are my treasure)
                    If you let me treasure you (You are my treasure)
                    Oh, oh, oh`
        },
        {
            id:'15',
            title: 'Treasure',
            artist: 'Niki',
            description: '"Take a Chance with Me" is a heartfelt song about vulnerability and the courage to open up to love. With its gentle melody and sincere lyrics, it invites someone special to take a leap of faith and explore the possibility of a meaningful connection.',
            cover: '../assets/Home/niki.jpg',
            file: '../assets/Songs/NIKI - Take A Chance With Me (Official Lyric Video).mp3',
            lyric: `[Verse 1]
                    His laugh you'd die for, his laugh you'd die for
                    The kind that colors the sky
                    Heart intangible
                    Slips away faster than dandelion fluff in the sunlight
                    And he's got swirls of passion in his eyes
                    Uncovering the dreams, he dreams at night
                    As much and hard as he tries to hide
                    I can see right through, see right through

                    [Verse 2]
                    His voice you'd melt for, he says my name like
                    I'll fade away somehow if he's too loud
                    What I would give for me to get my feet
                    Back on the ground, head off the clouds
                    I laugh at how we're polar opposites
                    I read him like a book, and he's a clueless littlе kid
                    Doesn't know that I'd stop time and space
                    Just to makе him smile, make him smile

                    [Chorus]
                    Oh, why can't we for once
                    Say what we want, say what we feel?
                    Oh, why can't you for once
                    Disregard the world, and run to what you know is real?
                    Take a chance with me, take a chance with me
                    See upcoming pop shows
                    Get tickets for your favorite artists
                    You might also like
                    Story of My Life
                    One Direction
                    Mantra
                    JENNIE
                    Thick Of It
                    KSI
                    [Verse 3]
                    His kiss you'd kill for
                    Just one and you're done for
                    Electricity surging in the air
                    He drives me crazy, it's so beyond me
                    How he'd look me dead in the eye and stay unaware

                    [Pre-Chorus]
                    That I'm hopelessly captivated
                    By a boy who thinks love’s overrated
                    How did I get myself in this arrangement?
                    It baffles me, too, baffles me, too

                    [Chorus]
                    Oh, why can't we for once
                    Say what we want, say what we feel?
                    Oh, why can't you for once
                    Disregard the world, and run to what you know is real?

                    [Bridge]
                    In the end, we only regret
                    The chances we didn't take
                    I'll be your safety net
                    So, why not raise the stakes?
                    And I can hear your heart from across the room
                    Pulsing through my veins
                    I know you need this, too
                    Lie to me all you please
                    I can see right through
                    See right through
                    [Chorus]
                    Oh, why can't we for once
                    Say what we want, say what we feel?
                    Oh, why can't you for once
                    Disregard the world, and run to what you know is real?
                    Oh, why can’t we for once
                    Say what we want, say what we feel?
                    Oh, why can't you for once
                    Disregard the world, and run to what you know is real?
                    Take a chance with me, take a chance with me`
        },
        {
            id:'16',
            title: 'OMG',
            artist: 'New Jeans ',
            description: '"OMG" by NewJeans is a catchy K-pop track that blends R&B and hip-hop influences to express the excitement and confusion of young love.',
            cover: '../assets/Home/newjeans.jpeg',
            file: '../assets/Songs/OMG (Audio).mp3',
            lyric:`[Intro: Hanni]
                    이 노래는 it's about you, baby
                    Only you
                    You, you, you
                    You, you, you, you

                    [Verse 1: Haerin, Minji, Danielle]
                    내가 힘들 때 울 것 같을 때 (Mm-hm)
                    기운도 이젠 나지 않을 때 (Mm-hm)
                    It's you, 날 걱정하네, it's you, 날 웃게하네
                    말 안 해도 돼, boy, what do you say?

                    [Pre-Chorus: Hyein, Danielle, Minji, Haerin]
                    (They keep on asking me, "Who is he?")
                    멀리든 언제든지 달려와
                    (They keep on asking me, "Who is he?")
                    바쁜 척도 없이 넌 나타나
                    (They keep on asking me, "Who is he?")
                    이게 말이 되니 난 물어봐
                    (They keep on asking me, "Who is he?")
                    너는 말야, he's the one that's living in my system, baby

                    [Chorus: Hanni, Danielle]
                    Oh my, oh my God, 예상했어 나
                    I was really hoping that he will come through
                    Oh my, oh my God, 단 너뿐이야
                    Asking all the time about what I should do
                    See upcoming pop shows
                    Get tickets for your favorite artists
                    You might also like
                    NewJeans - Ditto (English Translation)
                    Genius English Translations
                    Flowers
                    Miley Cyrus
                    Until I Found You
                    Stephen Sanchez
                    [Post-Chorus: Haerin, Hyein, Hanni]
                    No, I can never let him go (Ooh)
                    너만 생각나, twenty-four (Ooh)
                    난 행운아야 정말로 (Ooh)
                    I know, I know (Ooh)
                    널 알기 전까지는 나 (Ooh)
                    의미 없었어 전부 다 (Ooh)
                    내 맘이 끝이 없는 걸 (Ooh)
                    I know, I know, I'm going crazy, right?

                    [Verse 2: Minji, Danielle, Hanni]
                    어디서든, 몇 번이든
                    There ain't nothing else that I would hold on to
                    I hear his voice through all the noise
                    잠시라도 내 손 놓지 마, no, no
                    걱정 없잖아
                    'Cause I got someone
                    혼자라도 괜찮아
                    'Cause I love someone

                    [Pre-Chorus: Hyein, Hanni, Danielle, Minji]
                    (They keep on asking me, "Who is he?")
                    멀리든 언제든지 달려와
                    (They keep on asking me, "Who is he?")
                    바쁜 척도 없이 넌 나타나
                    (They keep on asking me, "Who is he?")
                    이게 말이 되니 난 물어봐
                    (They keep on asking me, "Who is he?")
                    너는 말야, he's the one that's living in my system, baby
                    [Chorus: Hanni, Danielle]
                    Oh my, oh my God, 예상했어 나
                    I was really hoping that he will come through
                    Oh my, oh my God, 단 너뿐이야
                    Asking all the time about what I should do

                    [Post-Chorus: Haerin, Hyein]
                    No, I can never let him go (Ooh)
                    너만 생각나, twenty-four (Ooh)
                    난 행운아야 정말로 (Ooh)
                    I know, I know (Ooh)
                    널 알기 전까지는 나 (Ooh)
                    의미 없었어 전부 다 (Ooh)
                    내 맘이 끝이 없는 걸 (Ooh)
                    I know, I know (He's the one that's living in my system, baby, baby)

                    [Interlude: Haerin, Hanni, All]
                    Baby
                    Babe, baby
                    I'm going crazy, right? (Baby)
                    Baby
                    I'm going crazy, right?
                    Babe, baby
                    너와 나

                    [Bridge: Hanni, Hyein, Danielle]
                    My heart is glowing, it's glowing up (Glow, glow)
                    너랑만 있으면 무서울 게 없어 (No, no)
                    가득 메워진, 다 메워진 (붉어진)
                    My heart is glowing, it'd be glowing
                    'Cause he
                    [Chorus: Hanni, Danielle]
                    Oh my, oh my God, 예상했어 나
                    I was really hoping that he will come through
                    Oh my, oh my God, 단 너뿐이야
                    Asking all the time about what I should do (너와 나)

                    [Post-Chorus: Minji, Hyein, Haerin]
                    No, I can never let him go (Ooh)
                    He's right there for me, twenty-four (Ooh)
                    난 행운아야 정말로 (Ooh)
                    I know, I know (너와 나)
                    널 알기 전까지는 나 (Ooh)
                    의미 없었어 전부 다 (Ooh)
                    어떡해
                    My heart is glowing, it's glowing
                    My heart is glowing up so I can't sleep at night`
        },
        {
            id: '17',
            title:'Power Trip',
            artist:'J.Cole',
            description:'According to Cole himself the song has a double meaning, with the song not only about his love for a girl, but his love for hip-hop and how it’s got him up all night trying to create chart topping love songs.',
            cover:'../assets/Home/jcole.jpeg',
            file:'../assets/Songs/Power Trip.mp3',
            lyrics:
            `[Chorus 1: J. Cole]
            Got me up all night
            All I'm singin' is love songs
            She got me up all night
            Constant drinkin' and love songs
            She got me up all night
            Down-and-out with these love songs
            She got me up all night
            Drownin' out with these love songs
            She got me up all night (Yeah)
            All I'm singin' is love songs
            She got me up all night (Yeah)
            Constant drinkin' and love songs
            She got me up all night (Yeah)
            Down-and-out with these love songs
            She got me open all night (Uh-huh)
            Got me open all night, hey

            [Verse 1: J. Cole]
            Okay, back when I was sleeping in my mama crib
            Or even back when I was up there in Mohammed crib
            Paying seventeen hundred for the rent, money well spent
            No heater, but a nigga made heat, may I vent?
            Had a thing for ya, even wrote the song "Dreams" for ya
            ‘Cause I had dreams for ya, thoughts of a ring for ya
            Childish shit, you know child and shit
            Anonymous flowers sent, you know coward shit
            Now a nigga signed to Hov, took a power trip
            Back home, I'm grown now, and the city's my throne now, huh
            The same clubs that I used to get tossed out
            Life got Kriss Kross'd: totally crossed out
            ‘Cause now I'm in this bitch and I'm totally bossed out
            Old chicks crying ‘cause they know that they lost out
            But I'm still on you, I'm still on you
            My drink spill on me, while I feel on you, I'm sayin'—
            See upcoming rap shows
            Get tickets for your favorite artists
            You might also like
            Darling, I
            Tyler, The Creator
            Judge Judy
            Tyler, The Creator
            St. Chroma
            Tyler, The Creator
            [Pre-Chorus: Miguel]
            Would you believe me if I said I'm in love?
            Baby, I want you to want me
            Would you believe me if I said I'm in love?
            Baby, I want ya

            [Chorus 2: J. Cole]
            And we are, we are, we are
            Got me up all night
            And we are, we are, we are
            All I'm singin' is love songs
            And we are, we are, we are
            Got me up all night
            And we are, we are, we are (She got me)
            And we are, we are, we are (She got me)

            [Verse 2: J. Cole]
            Well, this has got to be the longest crush ever
            If I ever get to fuck it'd be the longest bust ever
            Love is a drug, like the strongest stuff ever and
            Fuck it, I'm on one, you feel me?
            She on a power trip, she got me where she want a nigga
            Wife'ing in the club, man, my homies gon' disown a nigga
            Like, "Give me twenty dollars, dollars!"
            Ass stupid, how you get to college, college?
            I'm in your city and I'm wonderin' if you're home now
            Went and found a man, but I'm hopin' you're alone now
            Can't help but feeling like I dropped the ball, cliché
            I used to pop up on you at the mall each day
            Now, typically I kick game like Eastbay
            But you got a nigga freeze-framed yelling: "Please play!"
            For Pete's sake, homie, pull it together
            Just fuck her one time and be through with forever, but—
            [Pre-Chorus: Miguel]
            Would you believe me if I said I'm in love?
            Baby, I want you to want me
            Would you believe me if I said I'm in love?
            Baby, I want ya, yeah

            [Chorus 2: J. Cole]
            And we are, we are, we are
            Got me up all night
            And we are, we are, we are
            All I'm singin' is love songs
            And we are, we are, we are
            Got me up all night
            And we are, we are, we are (She got me)
            And we are, we are, we are (She got me)

            [Chorus 1: J. Cole]
            Got me up all night (All night)
            All I'm singin' is love songs
            She got me up all night (All night)
            Constant drinkin' and love songs
            She got me up all night (All night)
            Down-and-out with these love songs
            She got me up all night (All night)
            Drownin' out with these love songs
            She got me up all night (Yeah)
            All I'm singin' is love songs
            She got me up all night (Yeah)
            Constant drinkin' and love songs
            She got me up all night (Yeah)
            Down-and-out with these love songs
            She got me open all night (Uh-huh)
            Got me open all night, hey
            [Outro: J. Cole]
            Back when I was sleeping in my mama crib
            *Space Bar Tap*

            [Produced by J. Cole]`
        },
        {
            id:'18',
            title: 'Suicidal',
            artist: 'YNW Melly',
            description: '"Suicidal" by YMW OMG is an emotional song that explores the pain of heartbreak and mental struggle through raw, confessional lyrics.',
            cover: '../assets/Home/melly.jpeg',
            file: '../assets/Songs/YNW Melly - Suicidal [Official Audio].mp3',
            lyric:`[Intro]
                    Suicidal
                    Your love is suicidal
                    Lately, I've been feeling suicidal
                    Your love is suicidal

                    [Pre-Chorus]
                    I thought that we were meant to be
                    You took my heart and made it bleed
                    I gave you all my ecstasy
                    I know you'll be the death of me (Keep it Z3N)
                    Left lipstick on my Hennessy
                    Felt like you took my soul from me
                    You gave me all your ecstasy
                    I thought that we were meant to be

                    [Chorus]
                    Your love is suicidal
                    For me, your love is suicidal
                    To me, your love is suicidal
                    To me, your love is suicidal

                    [Refrain]
                    I'm sippin' Hennessy-'y-'y, ooh
                    I'm sippin' Hennessy-'y-'y, ooh
                    See upcoming rap shows
                    Get tickets for your favorite artists
                    You might also like
                    Suicidal (Remix)
                    YNW Melly
                    Murder on My Mind
                    YNW Melly
                    THE HEART PART 6
                    Drake
                    [Verse]
                    I don't want to lose my conscience
                    Drinkin' all this Hennessy
                    Baby, you took control of me
                    And I got too many enemies
                    I knew you wanted to fuck him 'cause I could just tell
                    Check my back, now I'm, now I'm in my bag, yeah
                    You did me bad (Yeah), you did me bad (Yeah)
                    But I said, "Fuck it," and I ran up my bag, yeah
                    I'm in my bag, I'm in my bag now
                    But you didn't even put it all on the line
                    For me, no, oh, I'm sorry
                    This is the end of us
                    It's crazy 'cause my heart is dangerous
                    Felt like you took my soul from me
                    Like the devil got a hold on me
                    Everybody wishin' bad on me
                    Everybody wishin' bad on me
                    You taught a lesson to me that I had to learn
                    And I'm so sorry 'cause you let our bridges burn
                    I said I loved you and I wish I never did
                    I swear to God, I swear to God, you stupid bitch

                    [Pre-Chorus]
                    I thought that we were meant to be
                    You took my heart and made it bleed
                    I gave you all my ecstasy
                    I know you'll be the death of me
                    Left lipstick on my Hennessy
                    Felt like you took my soul from me
                    No way, I gave you all my ecstasy
                    I thought that you were meant for me
                    I know you'll be the death of me
                    Thought we were for eternity
                    You fucked me up, both physically
                    And mentally, I can't believe
                    [Refrain]
                    I'm sippin' Hennessy-'y-'y, ooh
                    I'm sippin' Hennessy-'y-'y, ooh
                    I'm sippin' Hennessy-'y-'y, ooh
                    I'm sippin' Hennessy-'y-'y, ooh

                    [Chorus]
                    Your love is suicidal
                    For me, your love is suicidal
                    To me, your love is suicidal
                    To me, your love is suicidal

                    [Outro]
                    You taught a lesson to me that I had to learn
                    And I'm so sorry 'cause you let our bridges burn
                    I said I loved you and I wish I never did
                    I swear to God, I swear to God, you stupid bitch`
        },
        {
            id: '19',
            title:'Snooze',
            artist:'SZA',
            description:'“Snooze” features SZA trying to be with a person who she loves so much. ',
            cover:'../assets/Home/sza.jpeg',
            file:'../assets/Songs/SZA - Snooze (Audio).mp3',
            lyrics:
            `[Intro]
            Ooh
            I think I know

            [Verse 1]
            I'll touch that fire for you
            I do that three, four times again, I testify for you
            I told that lie, I'd kill that bitch
            I do what all of them around you scared to do, I'm not
            Long as you juggin' out here for me, I got it
            Mobbin', schemin', lootin', hide your bodies
            Long as you dreamin' 'bout me, ain't no problem
            I don't got nobody, just with you right now
            Tell the truth, I look better under you

            [Chorus]
            I can't lose when I'm with you
            How can I snooze and miss the moment?
            You just too important
            Nobody do body like you do
            I can't lose when I'm with you
            I can't just snooze and miss the moment
            You just too important
            Nobody do body like you do, you do

            [Verse 2]
            In a droptop ride with you, I feel like Scarface (Scarface)
            Like that white bitch with the bob, I'll be your main one (Your main one)
            Lеt's take this argument back up to my place (My placе)
            Sex remind you I'm nonviolent, I'm your day one (Day one)
            We ain't have shit yet, it was magic, yeah
            Smash and grab shit, yeah
            Nasty habits take a hold when you not here
            Ain't a home when you not here
            Hard to grow when you not here, I'm sayin'
            See upcoming R&B shows
            Get tickets for your favorite artists
            You might also like
            Flowers
            Miley Cyrus
            30 For 30
            SZA & Kendrick Lamar
            Family Matters
            Drake
            [Chorus]
            I can't lose when I'm with you
            How can I snooze and miss the moment?
            You just too important
            Nobody do body like you do
            I can't lose when I'm with you
            How can I snooze and miss the moment?
            You just too important
            Nobody do body like you do, you do

            [Bridge]
            Main one ridin'
            How you frontin' on me and I'm the main one tryin'?
            How you blame it on me and you the main one lyin'?
            How you threatenin' to leave and I'm the main one cryin'?
            Just tryna be your everything
            Main one ridin'
            How you frontin' on me and I'm the main one tryin'?
            How you blame it on me and you the main one lyin'?
            How you threatenin' to leave and I'm the main one cryin'?

            [Chorus]
            I can't lose when I'm with you (Like you, like you)
            How can I snooze and miss the moment? (Like you)
            You just too important
            Nobody do body like you do
            I can't lose when I'm with you (Like you)
            How can I snooze and miss the moment? (Like you)
            You just too important
            Nobody do body like you do, you do
            [Outro]
            Nah, nah, nah, nah
            I think I know, woah
            See, no, I can't lose, oh
            I think I know, oh`
        },
        {
            id: '',
            title:'',
            artist:'',
            description:'',
            cover:'',
            file:'',
            lyrics:
            ``
        },
        {
            id: '',
            title:'',
            artist:'',
            description:'',
            cover:'',
            file:'',
            lyrics:
            ``
        }

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