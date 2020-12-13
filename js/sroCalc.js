$(document).ready(function() {
    //jQuery code in here
    
    function average(input1, input2) {
        return (input1+input2)/2
    }

    function consumed(val1, val2) {
        return val1 - val2
    }

    // function formatNum(num) {
    //     let num = num
    //     if(num >= 1000) {
    //         num = num.split()
    //     }

    // }


    let stackPot;
    let stackPills;
    let stackArrows;
    let avgMobXp;
    let avgMobXpPerc;
    let spPerMob;
    let lvlUpExp;
    let currentExp;
    let remainingXP;
    let remainingKills;
    let spGain;
    let duration;
    let multiplier;
    let kills;
    let kills1;
    let kills2;
    let exp1;
    let exp2;
    let xp1;
    let xp2;
    let killsPerHour;
    let nextLvlTime;
    let nextLvlTimeSplit;
    let nextLvlTimeHh;
    let nextLvlTimeMm;
    let xpPerHour;
    let xpPerHourPerc;
    let spPerHour;
    let frameXp;
    let frameXpPerc;
    let frameSp;
    let arrowUsed;
    let arrowPerHour;
    let mpUsed;
    let mpPerHour;
    let hpUsed;
    let hpPerHour;
    let pillUsed;
    let pillsPerHour;
    let duraUsed;
    let duraPerHour;
    let dura;
    let duraTime;
    let duraTimeSplit;
    let duraTimeHh;
    let duraTimeMm;
    let duraArrow;
    let duraArrowStack;
    let duraMp;
    let duraMpStack;
    let duraHp;
    let duraHpStack;
    let duraPills;
    let duraPillsStack;
    let xpGained;
    let xpGainedPerc;
    let spGained;
    let mobsKilled;
    let afkTime;
    let afkArrow;
    let afkArrowStack;
    let afkMp;
    let afkMpStack;
    let afkHp;
    let afkHpStack;
    let afkPills;
    let afkPillsStack;
    let afkHammer;
    let afkXp;
    let afkSp;
    let silkAmount;
    let silkPrice;
    let moneyForSilk;
    let silkForHammer;
    let silkForReverse;
    let selectedMethod;
    let overviewCostGold;
    let afkCostGold;
    let afkCostSilk;
    let afkCostMoney;
    let hpPrice;
    let mpPrice;
    let arrowPrice;
    let pillPrice;
    let hpPriceStack;
    let mpPriceStack;
    let pillPriceStack;
    let arrowPriceStack;
    


    // Save data

    function saveProperties() {
        localStorage.setItem('mobXp1', $('#mobXp1').val())
        localStorage.setItem('mobXp2', $('#mobXp2').val())

        localStorage.setItem('mobSp1', $('#mobSp1').val())
        localStorage.setItem('mobSp2', $('#mobSp2').val())

        localStorage.setItem('levelUpExp', $('#levelUpExp').val())
        localStorage.setItem('currentExp', $('#currentExp').val())

        localStorage.setItem('duration', $('#duration').val())
        localStorage.setItem('kills', $('#kills').val())

        
        localStorage.setItem('coins1', $('#coins1').val())
        localStorage.setItem('coins2', $('#coins2').val())
        
        localStorage.setItem('exp1', $('#exp1').val())        
        localStorage.setItem('exp2', $('#exp2').val())

        localStorage.setItem('xp1', $('#xp1').val())
        localStorage.setItem('xp2', $('#xp2').val())

        localStorage.setItem('dura1', $('#dura1').val())
        localStorage.setItem('dura2', $('#dura2').val())
        
        localStorage.setItem('arrowUse1', $('#arrowUse1').val())
        localStorage.setItem('arrowUse2', $('#arrowUse2').val())

        localStorage.setItem('mpPotUse1', $('#mpPotUse1').val())
        localStorage.setItem('mpPotUse2', $('#mpPotUse2').val())
        
        localStorage.setItem('hpPotUse1', $('#hpPotUse1').val())
        localStorage.setItem('hpPotUse2', $('#hpPotUse2').val())
        
        localStorage.setItem('pillUse1', $('#pillUse1').val())
        localStorage.setItem('pillUse2', $('#pillUse2').val())
        
        localStorage.setItem('dura1', $('#dura1').val())
        localStorage.setItem('dura2', $('#dura2').val())
        
        localStorage.setItem('duraWeap', $('#duraWeap').val())
        
        localStorage.setItem('afkTime', $('#afkTime').val())

        
        
        // console.log("Properties updated")
    }

    function saveSettings() {
        localStorage.setItem('stackPot', $('#stackPot').val())
        localStorage.setItem('stackPills', $('#stackPills').val())
        localStorage.setItem('stackArrows', $('#stackArrows').val())

        localStorage.setItem('hammerPrice', $('#hammerPrice').val())
        localStorage.setItem('hammerQuantity', $('#hammerQuantity').val())
        
        localStorage.setItem('reversePrice', $('#reversePrice').val())
        localStorage.setItem('reverseQuantity', $('#reverseQuantity').val())
        
        localStorage.setItem('mpPrice', $('#mpPrice').val())
        localStorage.setItem('hpPrice', $('#hpPrice').val())
        localStorage.setItem('arrowPrice', $('#arrowPrice').val())
        localStorage.setItem('pillPrice', $('#pillPrice').val())
        
        localStorage.setItem('silkAmount', $('#silkAmount').val())
        localStorage.setItem('silkPrice', $('#silkPrice').val())
        
        // console.log("Settings updated")
    }

    function checkMethod() {
        selectedMethod = $( ".method:checked" ).val()
        if (selectedMethod === 'manually'){
            $('.methods .manually').show()
            $('.methods .manually').siblings().hide()
        } else if (selectedMethod === 'byCoins'){
            $('.methods .byCoins').show()
            $('.methods .byCoins').siblings().hide()
        } else if (selectedMethod === 'byExp'){
            $('.methods .byExp').show()
            $('.methods .byExp').siblings().hide()
        } else if (selectedMethod === 'byXp'){
            $('.methods .byXp').show()
            $('.methods .byXp').siblings().hide()
        }
    }

    

    $( ".method" )
        .on( "click", function() {
            checkMethod()
        });

    var radiosMethod = document.getElementsByName("method");
    var valMethod = localStorage.getItem('method');

        for(var i=0;i<radiosMethod.length;i++){
          if(radiosMethod[i].value == valMethod){
            radiosMethod[i].checked = true;
          }
        }
        $('input[name="method"]').on('change', function(){
          localStorage.setItem('method', $(this).val());
          
          checkMethod();
        });

    checkMethod();

    //Erase Data
    $('#erase').on('click', function() {
        localStorage.clear()
        console.log("data cleared")
        $('input').val("")
        sroCalc();
    })

    $('.eraseLink').on('click', function(){
        $('#security').slideToggle()
    })

    //load Data

    $('#mobXp1').val(localStorage.getItem('mobXp1'))
    $('#mobXp2').val(localStorage.getItem('mobXp2'))
    
    $('#mobSp1').val(localStorage.getItem('mobSp1'))
    $('#mobSp2').val(localStorage.getItem('mobSp2'))
    
    $('#levelUpExp').val(localStorage.getItem('levelUpExp'))
    $('#currentExp').val(localStorage.getItem('currentExp'))
    
    $('#duration').val(localStorage.getItem('duration'))
    $('#kills').val(localStorage.getItem('kills'))

    $('#coins1').val(localStorage.getItem('coins1'))
    $('#coins2').val(localStorage.getItem('coins2'))
    
    $('#exp1').val(localStorage.getItem('exp1'))
    $('#exp2').val(localStorage.getItem('exp2'))
    
    $('#xp1').val(localStorage.getItem('xp1'))
    $('#xp2').val(localStorage.getItem('xp2'))
    
    
    $('#arrowUse1').val(localStorage.getItem('arrowUse1'))
    $('#arrowUse2').val(localStorage.getItem('arrowUse2'))
    
    $('#mpPotUse1').val(localStorage.getItem('mpPotUse1'))
    $('#mpPotUse2').val(localStorage.getItem('mpPotUse2'))
    
    $('#hpPotUse1').val(localStorage.getItem('hpPotUse1'))
    $('#hpPotUse2').val(localStorage.getItem('hpPotUse2'))
    
    $('#pillUse1').val(localStorage.getItem('pillUse1'))
    $('#pillUse2').val(localStorage.getItem('pillUse2'))
    
    $('#dura1').val(localStorage.getItem('dura1'))
    $('#dura2').val(localStorage.getItem('dura2'))
    
    $('#duraWeap').val(localStorage.getItem('duraWeap'))
    
    $('#afkTime').val(localStorage.getItem('afkTime'))

    
    $('#stackPot').val(localStorage.getItem('stackPot'))
    $('#stackArrows').val(localStorage.getItem('stackArrows'))
    $('#stackPills').val(localStorage.getItem('stackPills'))

    $('#hammerPrice').val(localStorage.getItem('hammerPrice'))
    $('#hammerQuantity').val(localStorage.getItem('hammerQuantity'))
    $('#reversePrice').val(localStorage.getItem('reversePrice'))
    $('#reverseQuantity').val(localStorage.getItem('reverseQuantity'))
    $('#mpPrice').val(localStorage.getItem('mpPrice'))
    $('#hpPrice').val(localStorage.getItem('hpPrice'))
    $('#arrowPrice').val(localStorage.getItem('arrowPrice'))
    $('#pillPrice').val(localStorage.getItem('pillPrice'))

    
    $('#silkAmount').val(localStorage.getItem('silkAmount'))
    $('#silkPrice').val(localStorage.getItem('silkPrice'))


   

    function sroCalc() {
            stackPot = $('#stackPot').val()
            stackPills = $('#stackPills').val()
            stackArrows = $('#stackArrows').val()
            
            avgMobXp = average(Number($('#mobXp1').val()), Number($('#mobXp2').val()))
            
            $('.mobXp').text(avgMobXp)

            spPerMob = average(Number($('#mobSp1').val()), Number($('#mobSp2').val()))/400

            $('.mobSp').text(spPerMob.toFixed(2))

            lvlUpExp = $('#levelUpExp').val()

            currentExp = $('#currentExp').val()

            avgMobXpPerc = avgMobXp/lvlUpExp*100 

            $('.avgMobXpPerc').text(avgMobXpPerc.toFixed(2))

            remainingXP = lvlUpExp - lvlUpExp/100 * currentExp
            
            remainingKills = remainingXP/avgMobXp

            $('.lvlUpKills').text(Math.floor(remainingKills))

            spGain = spPerMob*remainingKills

            $('.spGain').text(Math.floor(spGain))

            duration = Number($('#duration').val())

            

            if (selectedMethod === 'manually'){
                kills = $('#kills').val()
            } else if (selectedMethod === 'byCoins'){
                kills = $('#coins2').val() - $('#coins1').val()
            } else if (selectedMethod === 'byExp'){
                kills = ($('#exp2').val() - $('#exp1').val()) / avgMobXp
            } else if (selectedMethod === 'byXp'){
                kills = ((Number($('#xp2').val()) - Number($('#xp1').val())))*(lvlUpExp/100)/avgMobXp
                console.log(kills)
            }

            multiplier = 60/duration
            
            $('.kills').text(Number(kills).toFixed(0))

            killsPerHour = kills * multiplier
            
            $('.killsPerHour').text(killsPerHour.toFixed(0))

            nextLvlTime = remainingKills/killsPerHour

            nextLvlTimeSplit = String(nextLvlTime.toFixed(2)).split(".")

            nextLvlTimeHh = nextLvlTimeSplit[0]
            nextLvlTimeMm = (nextLvlTimeSplit[1]*0.6).toFixed(0)

            if(Number(nextLvlTimeHh) <= 0) {
                $('.nextLvlTime').text(nextLvlTimeMm+"min")
            } else if(Number(nextLvlTimeHh) <= 24) {
                $('.nextLvlTime').text(nextLvlTimeHh+"h and "+nextLvlTimeMm+"min")
            } else if(Number(nextLvlTimeHh) <= 168) {
                let nextLvlTimeDd = (nextLvlTimeHh/24).toFixed(2)

                $('.nextLvlTime').text("about "+nextLvlTimeDd+" days...")
                // nextLvlTimeHh+"h and "+nextLvlTimeMm+"min"
            } else {
                $('.nextLvlTime').text("over a week man...")
            }

            Date.prototype.addMinutes= function(m){
                this.setMinutes(this.getMinutes()+m);
                return this;
            }

            

            $('.lvlUpTime').text(new Date().addMinutes(nextLvlTime*60))

            xpPerHour = killsPerHour * avgMobXp

            xpPerHourPerc = xpPerHour / lvlUpExp * 100

            $('.xpPerHour').text(xpPerHourPerc.toFixed(2))

            spPerHour = killsPerHour * spPerMob

            $('.spPerHour').text(spPerHour.toFixed(0))

            frameXp = kills * avgMobXp

            frameXpPerc = frameXp / lvlUpExp * 100

            $('.frameXp').text(frameXpPerc.toFixed(2))
            
            frameSp = kills * spPerMob

            $('.frameSp').text(frameSp.toFixed(0))

            arrowUsed = consumed($('#arrowUse1').val(), $('#arrowUse2').val())
            
            $('.arrowsUsed').text(arrowUsed)

            arrowPerHour = arrowUsed*multiplier
            
            $('.arrowsPerHour').text(arrowPerHour.toFixed(0))

            mpUsed = consumed($('#mpPotUse1').val(), $('#mpPotUse2').val())

            $('.mpPotsUsed').text(mpUsed)

            mpPerHour = mpUsed*multiplier
            
            $('.mpPotsPerHour').text(mpPerHour.toFixed(0))

            hpUsed = consumed($('#hpPotUse1').val(), $('#hpPotUse2').val())

            $('.hpPotsUsed').text(hpUsed)

            hpPerHour = hpUsed*multiplier
            
            $('.hpPotsPerHour').text(hpPerHour.toFixed(0))

            pillUsed = consumed($('#pillUse1').val(), $('#pillUse2').val())

            $('.pillsUsed').text(pillUsed)

            pillsPerHour = pillUsed*multiplier

            $('.pillsPerHour').text(pillsPerHour.toFixed(0))

            duraUsed = consumed($('#dura1').val(), $('#dura2').val())

            $('.duraLoss').text(duraUsed.toFixed(0))
            
            duraPerHour = duraUsed*multiplier

            $('.duraLossPerHour').text(duraPerHour.toFixed(0))

            dura = $('#duraWeap').val()

            duraTime = dura/duraPerHour

            duraTimeSplit = String(duraTime.toFixed(2)).split(".")

            duraTimeHh = duraTimeSplit[0]
            duraTimeMm = (duraTimeSplit[1]*0.6).toFixed(0)

            $('.maxTime').text(duraTimeHh+"h and "+duraTimeMm+"min")

            duraArrow = arrowPerHour*duraTime
            duraArrowStack = duraArrow/stackArrows

            $('.duraArrow').text(duraArrow.toFixed(0))
            $('.duraArrowStack').text(Math.ceil(duraArrowStack))

            duraMp = mpPerHour*duraTime
            duraMpStack = duraMp/stackPot

            $('.duraMp').text(duraMp.toFixed(0))
            $('.duraMpStack').text(Math.ceil(duraMpStack))

            duraHp = hpPerHour*duraTime
            duraHpStack = duraHp/stackPot

            $('.duraHp').text(duraHp.toFixed(0))
            $('.duraHpStack').text(Math.ceil(duraHpStack))

            duraPills = duraTime*pillsPerHour
            duraPillsStack = duraPills/stackPills
            $('.duraPills').text(duraPills.toFixed(0))
            $('.duraPillsStack').text(Math.ceil(duraPillsStack))

            xpGained = killsPerHour*avgMobXp*duraTime

            xpGainedPerc = xpGained / lvlUpExp *100

            $('.xpGained').text(xpGainedPerc.toFixed(2))

            spGained = killsPerHour*spPerMob*duraTime

            $('.spGained').text(spGained.toFixed(0))

            mobsKilled = killsPerHour*duraTime

            $('.mobsKilled').text(mobsKilled.toFixed(0))

            $('#afkLvlUp').on('click', function(){
                $('#afkTime').val(Math.ceil(nextLvlTime));
                sroCalc();
                localStorage.setItem('afkTime', $('#afkTime').val());
                
            })

            hpPrice = $('#hpPrice').val()
            mpPrice = $('#mpPrice').val()
            pillPrice = $('#pillPrice').val()
            arrowPrice = $('#arrowPrice').val()

            hpPriceStack = hpPrice*stackPot
            mpPriceStack = mpPrice*stackPot
            pillPriceStack = pillPrice*stackPills
            arrowPriceStack = arrowPrice*stackArrows

            
            

            overviewCostGold = (duraHpStack*hpPriceStack) + (duraMpStack*mpPriceStack) + (duraPillsStack*pillPriceStack) + (duraArrowStack*arrowPriceStack)
            
            $('.overviewCostGold').text((Math.round(overviewCostGold)).toLocaleString())
            
            afkTime = $('#afkTime').val()
            
            afkArrow = afkTime*arrowPerHour
            afkArrowStack = afkArrow/stackArrows
            
            afkMp = afkTime*mpPerHour
            afkMpStack = afkMp/stackPot
            
            afkHp = afkTime*hpPerHour
            afkHpStack = afkHp/stackPot
            
            afkPills = afkTime*pillsPerHour
            afkPillsStack = afkPills/stackPills

            afkHammer = afkTime/duraTime
            afkXp = afkTime*xpPerHourPerc
            afkSp = afkTime*spPerHour

            afkCostGold = (afkHpStack*hpPriceStack) + (afkMpStack*mpPriceStack) + (afkPillsStack*pillPriceStack) + (afkArrowStack*arrowPriceStack)
            
            $('.afkCostGold').text((Math.round(afkCostGold)).toLocaleString())
            
            

            

            $('.afkCostMoney').text(afkCostMoney)
            
            $('.afkArrow').text(afkArrow.toFixed(0))
            $('.afkArrowStack').text(Math.ceil(afkArrowStack))


            $('.afkMp').text(afkMp.toFixed(0))
            $('.afkMpStack').text(Math.ceil(afkMpStack))
            $('.afkHp').text(afkHp.toFixed(0))
            $('.afkHpStack').text(Math.ceil(afkHpStack))

            
            $('.afkPills').text(afkPills.toFixed(0))
            $('.afkPillsStack').text(Math.ceil(afkPillsStack))

            $('.afkHammer').text(Math.ceil(afkHammer))
            
            $('.afkXp').text(afkXp.toFixed(2))
            $('.afkSp').text(afkSp.toFixed(0))

            silkAmount = $('#silkAmount').val()
            silkPrice = $('#silkPrice').val()
            
            moneyForSilk = silkPrice/silkAmount

            

            $('.moneyForSilk').text(Math.round((moneyForSilk + Number.EPSILON) * 100) / 100)
            
            
            silkForHammer = $('#hammerPrice').val() / $('#hammerQuantity').val()

            $('.silkForHammer').text(Math.round(((silkForHammer + Number.EPSILON) * 100) / 100)+" Silk/Hammer")

            $('.moneyForHammer').text(Math.round(silkForHammer* moneyForSilk*100)+" cents/Hammer")

            
            silkForReverse = $('#reversePrice').val() / $('#reverseQuantity').val()

            $('.silkForReverse').text(Math.round(((silkForReverse + Number.EPSILON) * 100) / 100)+" Silk/Scroll")

            $('.moneyForReverse').text(Math.round(silkForReverse* moneyForSilk*100)+" cents/Scroll")


            afkCostSilk = Math.ceil(afkHammer*silkForHammer)

            $('.afkCostSilk').text(afkCostSilk)

            afkCostMoney = afkCostSilk*moneyForSilk

            if(afkCostMoney <= 1) {
                $('.afkCostMoney').text(Math.round(afkCostMoney*100)+"cents")
            } else {
                $('.afkCostMoney').text((Math.round((afkCostMoney + Number.EPSILON) * 100) / 100)+"€")
            }
            
            }

            

            

        sroCalc();
    

    function runAll() {
        sroCalc();
       
    }
        $('input')
            .on('keyup', function(){
                runAll();
                saveProperties();
            })
            .on('click', function(){
                runAll();
                saveProperties();
            })

        $('#settings input').on('keyup', function(){
            saveSettings();
        })
        .on('click', function(){
            saveSettings();
        })


    


});