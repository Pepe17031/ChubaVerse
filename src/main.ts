/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;
// Ожидание готовности API
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)
// Ожидание готовности API

    //СТЕНД 1
    WA.room.onEnterLayer('infobordd/infozone1').subscribe(() => {
        var mysound = WA.sound.loadSound("door/paper.mp3");
        mysound.play(config);    
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("infopop1","Добро пожаловать " + WA.player.name + "\nТекущее время: " + time + "\n\nРассписание:\n\n13:30 - Начало и Квест Ярика.\n14:00 - Выпускная речь Глеба.\n14:15 - Экзамен у Чубаси.....\n14:30 - Побег Жоры и Лабирит.\n15:00 - Секретный квест......\n15:30 - Викторина и Ребусы...\n16:00 - Музыкальная пауза....\n16:30 - Квиз по Фан видео....\n16:40 - Король и Королева....\n17:00 - Салют и завершение...",[]);
    })
    WA.room.onLeaveLayer('infobordd/infozone2').subscribe(closePopUp)
    //СТЕНД 1

    //СТЕНД 2
    WA.room.onEnterLayer('infobordd/infozone2').subscribe(() => {
        var mysound = WA.sound.loadSound("door/paper.mp3");
        mysound.play(config);
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("infopop2","Добро пожаловать " + WA.player.name + "\nТекущее время: " + time + "\n\nРассписание:\n\n13:30 - Начало и Квест Ярика.\n14:00 - Выпускная речь Глеба.\n14:15 - Экзамен у Чубаси.....\n14:30 - Побег Жоры и Лабирит.\n15:00 - Секретный квест......\n15:30 - Викторина и Ребусы...\n16:00 - Музыкальная пауза....\n16:30 - Квиз по Фан видео....\n16:40 - Король и Королева....\n17:00 - Салют и завершение...",[]);
    })
    WA.room.onLeaveLayer('infobordd/infozone3').subscribe(closePopUp)
    //СТЕНД 2

    //СТЕНД 3
    WA.room.onEnterLayer('infobordd/infozone3').subscribe(() => {
        var mysound = WA.sound.loadSound("door/paper.mp3");
        mysound.play(config);
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("infopop3","Добро пожаловать " + WA.player.name + "\nТекущее время: " + time + "\n\nРассписание:\n\n13:30 - Начало и Квест Ярика.\n14:00 - Выпускная речь Глеба.\n14:15 - Экзамен у Чубаси.....\n14:30 - Побег Жоры и Лабирит.\n15:00 - Секретный квест......\n15:30 - Викторина и Ребусы...\n16:00 - Музыкальная пауза....\n16:30 - Квиз по Фан видео....\n16:40 - Король и Королева....\n17:00 - Салют и завершение...",[]);
    })
    WA.room.onLeaveLayer('infobordd/infozone4').subscribe(closePopUp)
    //СТЕНД 3

    //СТЕНД 4
    WA.room.onEnterLayer('infobordd/infozone4').subscribe(() => {
        var mysound = WA.sound.loadSound("door/paper.mp3");
        mysound.play(config);
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("infopop4","Добро пожаловать " + WA.player.name + "\nТекущее время: " + time + "\n\nРассписание:\n\n13:30 - Начало и Квест Ярика.\n14:00 - Выпускная речь Глеба.\n14:15 - Экзамен у Чубаси.....\n14:30 - Побег Жоры и Лабирит.\n15:00 - Секретный квест......\n15:30 - Викторина и Ребусы...\n16:00 - Музыкальная пауза....\n16:30 - Квиз по Фан видео....\n16:40 - Король и Королева....\n17:00 - Салют и завершение...",[]);
    })
    WA.room.onLeaveLayer('infobordd/infozone5').subscribe(closePopUp)
    //СТЕНД 4

    //СТЕНД 5
    WA.room.onEnterLayer('infobordd/infozone5').subscribe(() => {
        var mysound = WA.sound.loadSound("door/paper.mp3");
        mysound.play(config);
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("infopop5","Добро пожаловать " + WA.player.name + "\nТекущее время: " + time + "\n\nРассписание:\n\n13:30 - Начало и Квест Ярика.\n14:00 - Выпускная речь Глеба.\n14:15 - Экзамен у Чубаси.....\n14:30 - Побег Жоры и Лабирит.\n15:00 - Секретный квест......\n15:30 - Викторина и Ребусы...\n16:00 - Музыкальная пауза....\n16:30 - Квиз по Фан видео....\n16:40 - Король и Королева....\n17:00 - Салют и завершение...",[]);
    })
    WA.room.onLeaveLayer('infobordd/infozone1').subscribe(closePopUp)
    //СТЕНД 5

    //НПС ЯРИК
    WA.room.onEnterLayer('npc/npc1zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("npc1pop","Ой, вы не дядя Глеб. Но может сможете нам помочь? Мы хотим киндер, но коза съела код от холодильника.",[]);
        var mysound = WA.sound.loadSound("npc/yarik.mp3");
        mysound.play(config);
    })
    WA.room.onLeaveLayer('npc/npc1zone').subscribe(closePopUp)
    //НПС ЯРИК

    //НПС ЧУБАСЯ
    WA.room.onEnterLayer('npc/npc3zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("npc3pop","Привет. Давай проверим насколько ты усвоил знания. Проходи к столу и тяни билет.",[]);
        var mysound = WA.sound.loadSound("npc/pug.mp3");
        mysound.play(config);
    })
    WA.room.onLeaveLayer('npc/npc3zone').subscribe(closePopUp)
    //НПС ЧУБАСЯ   
    
    //НПС ЖОРА
    WA.room.onEnterLayer('npc/npc4zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("npc4pop","ЖОРА: Эй, подожди! Помоги мне сбежать! Это единственное место где нет камер, но я выронил записки с кодом и их унесло ветром. Помоги мне их собрать и открыть калитку. Если справишься, сможешь взять награду из сундука. Я видел что записки унесло в сторону леса.",[]);
        var mysound = WA.sound.loadSound("npc/jora.mp3");
        mysound.play(config);
    })
    WA.room.onLeaveLayer('npc/npc4zone').subscribe(closePopUp)
    //НПС ЖОРА      

    //НПС КОЗА
    WA.room.onEnterLayer('npc/npc2zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("npc2pop","5 необычных мест найди, записки с кодом собери.",[]);
        var mysound = WA.sound.loadSound("npc/koza.mp3");
        mysound.play(config);
    })
    WA.room.onLeaveLayer('npc/npc2zone').subscribe(closePopUp)
    //НПС КОЗА  
    
    //ЯРИК-БАКЛАЖАНЫ
    WA.room.onEnterLayer("YQuest/Y1").subscribe(() => {
        var mysound = WA.sound.loadSound("door/bonus.mp3");
        mysound.play(config);
        var triggerMessage = WA.ui.displayActionMessage({
            message: "нажми ПРОБЕЛ чтобы раздвинуть ветви",
            callback: () => {
                WA.chat.sendChatMessage("Среди ветвей вы находите записку на которой указана часть кода от холодильника 1****", "КВЕСТ ЯРИКА")
            }
        });
        setTimeout(() => {
            triggerMessage.remove();
        }, 2000)
    });
    //ЯРИК-БАКЛАЖАНЫ
    
    //ЯРИК-АКУЛА
    WA.room.onEnterLayer("YQuest/Y2").subscribe(() => {
        var mysound = WA.sound.loadSound("door/bonus.mp3");
        mysound.play(config);
        var triggerMessage = WA.ui.displayActionMessage({
            message: "нажми ПРОБЕЛ чтобы поймать акулу",
            callback: () => {
                WA.chat.sendChatMessage("К хвосту акулу привязана саписка на которой указана часть кода от холодильника *2***", "КВЕСТ ЯРИКА")
            }
        });
        setTimeout(() => {
            triggerMessage.remove();
        }, 2000)
    });
    //ЯРИК-АКУЛА
    
    //ЯРИК-ПЕРСИК
    WA.room.onEnterLayer("YQuest/Y3").subscribe(() => {
        var mysound = WA.sound.loadSound("door/bonus.mp3");
        mysound.play(config);
        var triggerMessage = WA.ui.displayActionMessage({
            message: "нажми ПРОБЕЛ чтобы сорвать персик",
            callback: () => {
                WA.chat.sendChatMessage("К персику примотана записка на которой указана часть кода от холодильника **3**", "КВЕСТ ЯРИКА")
            }
        });
        setTimeout(() => {
            triggerMessage.remove();
        }, 2000)
    });
    //ЯРИК-ПЕРСИК
    
    //ЯРИК-ПЛИТКА
    WA.room.onEnterLayer("YQuest/Y4").subscribe(() => {
        var mysound = WA.sound.loadSound("door/bonus.mp3");
        mysound.play(config);
        var triggerMessage = WA.ui.displayActionMessage({
            message: "нажми ПРОБЕЛ чтобы поднять плитку",
            callback: () => {
                WA.chat.sendChatMessage("Под плиткой спрятана записка на которой указана часть кода от холодильника ***8*", "КВЕСТ ЯРИКА")
            }
        });
        setTimeout(() => {
            triggerMessage.remove();
        }, 2000)
    });
    //ЯРИК-ПЛИТКА
    
    //ЯРИК-ЛОДКА
    WA.room.onEnterLayer("YQuest/Y5").subscribe(() => {
        var mysound = WA.sound.loadSound("door/bonus.mp3");
        mysound.play(config);
        var triggerMessage = WA.ui.displayActionMessage({
            message: "нажми ПРОБЕЛ чтобы сорвать записку",
            callback: () => {
                WA.chat.sendChatMessage("К корме прибита записка на которой указана часть кода от холодильника ****5", "КВЕСТ ЯРИКА")
            }
        });
        setTimeout(() => {
            triggerMessage.remove();
        }, 2000)
    });
    //ЯРИК-ЛОДКА
    
    //ЖОРА ПУСТО
    WA.room.onEnterLayer("YQuest/J0").subscribe(() => {
        var triggerMessage = WA.ui.displayActionMessage({
            message: "нажми ПРОБЕЛ осмотрется",
            callback: () => {
                WA.chat.sendChatMessage("Вы ничего не находите", "КВЕСТ ЖОРЫ")
                var mysound = WA.sound.loadSound("door/list.mp3");
                mysound.play(config);
            }
        });
        setTimeout(() => {
            triggerMessage.remove();
        }, 2000)
    });
    //ЖОРА  ПУСТО

    //ЖОРА 1
    WA.room.onEnterLayer("YQuest/J1").subscribe(() => {
        var triggerMessage = WA.ui.displayActionMessage({
            message: "нажми ПРОБЕЛ осмотрется",
            callback: () => {
                WA.chat.sendChatMessage("В листве вы находите записку с частью кода 1***", "КВЕСТ ЖОРЫ")
                var mysound = WA.sound.loadSound("door/list.mp3");
                mysound.play(config);
            }
        });
        setTimeout(() => {
            triggerMessage.remove();
        }, 2000)
    });
    //ЖОРА  1    

    //ЖОРА 2
    WA.room.onEnterLayer("YQuest/J2").subscribe(() => {
        var triggerMessage = WA.ui.displayActionMessage({
            message: "нажми ПРОБЕЛ осмотрется",
            callback: () => {
                WA.chat.sendChatMessage("В листве вы находите записку с частью кода *2**", "КВЕСТ ЖОРЫ")
                var mysound = WA.sound.loadSound("door/list.mp3");
                mysound.play(config);
            }
        });
        setTimeout(() => {
            triggerMessage.remove();
        }, 2000)
    });
    //ЖОРА  2
    
    //ЖОРА 3
    WA.room.onEnterLayer("YQuest/J3").subscribe(() => {
        var triggerMessage = WA.ui.displayActionMessage({
            message: "нажми ПРОБЕЛ осмотрется",
            callback: () => {
                WA.chat.sendChatMessage("В листве вы находите записку с частью кода **3*", "КВЕСТ ЖОРЫ")
                var mysound = WA.sound.loadSound("door/list.mp3");
                mysound.play(config);
            }
        });
        setTimeout(() => {
            triggerMessage.remove();
        }, 2000)
    });
    //ЖОРА  3
    
    //ЖОРА 4
    WA.room.onEnterLayer("YQuest/J4").subscribe(() => {
        var triggerMessage = WA.ui.displayActionMessage({
            message: "нажми ПРОБЕЛ осмотрется",
            callback: () => {
                WA.chat.sendChatMessage("В листве вы находите записку с частью кода ***4", "КВЕСТ ЖОРЫ")
                var mysound = WA.sound.loadSound("door/list.mp3");
                mysound.play(config);
            }
        });
        setTimeout(() => {
            triggerMessage.remove();
        }, 2000)
    });
    //ЖОРА  4
    
    //НПС ФАЯ
    WA.room.onEnterLayer('npc/npc5zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("npc5pop","ФАЯ: Привет, милок! Разбойники? А я то гадала кто мне грядки истоптал. Нет, не видела, но кажется слышала ночью шорох в огороде. Может УГОЛЁК что-то видел...",[]);
        var mysound = WA.sound.loadSound("npc/faya.mp3");
        mysound.play(config);
    })
    WA.room.onLeaveLayer('npc/npc5zone').subscribe(closePopUp)
    //НПС ФАЯ  
    
    //НПС УГОЛЕК
    WA.room.onEnterLayer('npc/npc6zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("npc6pop","УГОЛЁК: Мяв, поспрашивай в лабиринте, ктонибуть из зверей должен знать код.",[]);
        var mysound = WA.sound.loadSound("npc/myu.mp3");
        mysound.play(config);
    })
    WA.room.onLeaveLayer('npc/npc6zone').subscribe(closePopUp)
    //НПС УГОЛЕК
    
    //НПС ЖЕЛТОПУЗИК
    WA.room.onEnterLayer('npc/npc7zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("npc7pop","ЖЕЛТОПУЗИК: Без пароля не пущу",[]);
        var mysound = WA.sound.loadSound("npc/shhh.mp3");
        mysound.play(config);
    })
    WA.room.onLeaveLayer('npc/npc7zone').subscribe(closePopUp)
    //НПС ЖЕЛТОПУЗИК
    
    //НПС ЛАБ 1
    WA.room.onEnterLayer('npc/npc8zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("npc8pop","ТРЕТЬЯ ЦИФРА ДВА",[]);
        var mysound = WA.sound.loadSound("npc/kwa.mp3");
        mysound.play(config);
    })
    WA.room.onLeaveLayer('npc/npc8zone').subscribe(closePopUp)
    //НПС ЛАБ 1
    
    //НПС ЛАБ 2
    WA.room.onEnterLayer('npc/npc9zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("npc9pop","ПЕРВАЯ  ЦИФРА БОЛЬШЕ ВТОРОЙ НА ДВА",[]);
        var mysound = WA.sound.loadSound("door/magic.mp3");
        mysound.play(config);
    })
    WA.room.onLeaveLayer('npc/npc9zone').subscribe(closePopUp)
    //НПС ЛАБ 2 

    //НПС ЛАБ 3
    WA.room.onEnterLayer('npc/npc10zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("npc10pop","ВТОРАЯ  ЦИФРА РАВНА ЧЕТВЕРТОЙ",[]);
        var mysound = WA.sound.loadSound("npc/golub.mp3");
        mysound.play(config);
    })
    WA.room.onLeaveLayer('npc/npc10zone').subscribe(closePopUp)
    //НПС ЛАБ 3 

    //НПС ЛАБ 4
    WA.room.onEnterLayer('npc/npc11zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("npc11pop","ЧЕТВЕРТАЯ  ЦИФРА ТРИ.",[]);
        var mysound = WA.sound.loadSound("npc/spider.mp3");
        mysound.play(config);
    })
    WA.room.onLeaveLayer('npc/npc11zone').subscribe(closePopUp)
    //НПС ЛАБ 4 

    //НПС САША
    WA.room.onEnterLayer('npc/npc12zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("npc12pop","Привет. Это будет творческий конкурс. Вам нужно нарисовать Вудона. Берите кисточки и проходите к доскам у вас 5 минут.",[]);
        var mysound = WA.sound.loadSound("npc/sasha.mp3");
        mysound.play(config);
    })
    WA.room.onLeaveLayer('npc/npc12zone').subscribe(closePopUp)
    //НПС САША    

    //НПС ВУДОН
    WA.room.onEnterLayer('npc/npc13zone').subscribe(() => {
        currentPopup = WA.ui.openPopup("npc13pop","Гав. Ночью разбойники спрятали клад на участке тетушки Фаи, но сперва тебе нужно пройдти этот лабиринт.",[]);
        var mysound = WA.sound.loadSound("npc/gav.mp3");
        mysound.play(config);
    })
    WA.room.onLeaveLayer('npc/npc13zone').subscribe(closePopUp)
    //НПС ВУДОН      

    // Подсключение API Extra
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

//ДОПОЛНИТЕЛЬНО

//ЗАКРЫТЬ POPUP
function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

//НАСТРОЙКИ ГРОМКОСТИ НПС
var config = {
    volume : 0.2,
    loop : false,
    rate : 1,
    detune : 1,
    delay : 0,
    seek : 0,
    mute : false
};

export {};
