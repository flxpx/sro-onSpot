$(document).ready(function() {
    //jQuery code in here
    
    function average(input1, input2) {
        return (input1+input2)/2
    }

    function consumed(val1, val2) {
        return val1 - val2
    }


    // Save data

    function saveSettings() {
        localStorage.setItem('stackPot', $('#stackPot').val())
        localStorage.setItem('stackPills', $('#stackPills').val())
        localStorage.setItem('stackArrows', $('#stackArrows').val())

        localStorage.setItem('mobXp1', $('#mobXp1').val())
        localStorage.setItem('mobXp2', $('#mobXp2').val())

        localStorage.setItem('mobSp1', $('#mobSp1').val())
        localStorage.setItem('mobSp2', $('#mobSp2').val())

        localStorage.setItem('levelUpExp', $('#levelUpExp').val())
        localStorage.setItem('currentExp', $('#currentExp').val())

        localStorage.setItem('duration', $('#duration').val())
        localStorage.setItem('kills', $('#kills').val())
        
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
    }

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
    $('#stackPot').val(localStorage.getItem('stackPot'))
    $('#stackArrows').val(localStorage.getItem('stackArrows'))
    $('#stackPills').val(localStorage.getItem('stackPills'))

    $('#mobXp1').val(localStorage.getItem('mobXp1'))
    $('#mobXp2').val(localStorage.getItem('mobXp2'))
    
    $('#mobSp1').val(localStorage.getItem('mobSp1'))
    $('#mobSp2').val(localStorage.getItem('mobSp2'))
    
    $('#levelUpExp').val(localStorage.getItem('levelUpExp'))
    $('#currentExp').val(localStorage.getItem('currentExp'))
    
    $('#duration').val(localStorage.getItem('duration'))
    $('#kills').val(localStorage.getItem('kills'))
    
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
   

    function sroCalc() {

        
            let stackPot = $('#stackPot').val()
            let stackPills = $('#stackPills').val()
            let stackArrows = $('#stackArrows').val()
            

            let avgMobXp = average(Number($('#mobXp1').val()), Number($('#mobXp2').val()))
            
            $('.mobXp').text(avgMobXp)

            let spPerMob = average(Number($('#mobSp1').val()), Number($('#mobSp2').val()))/400

            $('.mobSp').text(spPerMob.toFixed(2))

            let lvlUpExp = $('#levelUpExp').val()

            let currentExp = $('#currentExp').val()

            let remainingXP = lvlUpExp - lvlUpExp/100 * currentExp
            
            let remainingKills = remainingXP/avgMobXp

            $('.lvlUpKills').text(Math.floor(remainingKills))

            let spGain = spPerMob*remainingKills

            $('.spGain').text(Math.floor(spGain))

            let duration = Number($('#duration').val())

            let multiplier = 60/duration

            let kills = $('#kills').val()

            let killsPerHour = kills * multiplier
            
            $('.killsPerHour').text(killsPerHour.toFixed(0))

            let nextLvlTime = remainingKills/killsPerHour

            let nextLvlTimeSplit = String(nextLvlTime.toFixed(2)).split(".")

            let nextLvlTimeHh = nextLvlTimeSplit[0]
            let nextLvlTimeMm = (nextLvlTimeSplit[1]*0.6).toFixed(0)

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

            let xpPerHour = killsPerHour * avgMobXp

            let xpPerHourPerc = xpPerHour / lvlUpExp * 100

            $('.xpPerHour').text(xpPerHourPerc.toFixed(2))

            let spPerHour = killsPerHour * spPerMob

            $('.spPerHour').text(spPerHour.toFixed(0))

            let frameXp = kills * avgMobXp

            let frameXpPerc = frameXp / lvlUpExp * 100

            $('.frameXp').text(frameXpPerc.toFixed(2))
            
            let frameSp = kills * spPerMob

            $('.frameSp').text(frameSp.toFixed(0))

            let arrowUsed = consumed($('#arrowUse1').val(), $('#arrowUse2').val())
            
            $('.arrowsUsed').text(arrowUsed)

            let arrowPerHour = arrowUsed*multiplier
            
            $('.arrowsPerHour').text(arrowPerHour.toFixed(0))

            let mpUsed = consumed($('#mpPotUse1').val(), $('#mpPotUse2').val())

            $('.mpPotsUsed').text(mpUsed)

            let mpPerHour = mpUsed*multiplier
            
            $('.mpPotsPerHour').text(mpPerHour.toFixed(0))

            let hpUsed = consumed($('#hpPotUse1').val(), $('#hpPotUse2').val())

            $('.hpPotsUsed').text(hpUsed)

            let hpPerHour = hpUsed*multiplier
            
            $('.hpPotsPerHour').text(hpPerHour.toFixed(0))

            let pillUsed = consumed($('#pillUse1').val(), $('#pillUse2').val())

            $('.pillsUsed').text(pillUsed)

            let pillsPerHour = pillUsed*multiplier

            $('.pillsPerHour').text(pillsPerHour.toFixed(0))

            let duraUsed = consumed($('#dura1').val(), $('#dura2').val())

            $('.duraLoss').text(duraUsed.toFixed(0))
            
            let duraPerHour = duraUsed*multiplier

            $('.duraLossPerHour').text(duraPerHour.toFixed(0))

            let dura = $('#duraWeap').val()

            let duraTime = dura/duraPerHour

            let duraTimeSplit = String(duraTime.toFixed(2)).split(".")

            let duraTimeHh = duraTimeSplit[0]
            let duraTimeMm = (duraTimeSplit[1]*0.6).toFixed(0)

            $('.maxTime').text(duraTimeHh+"h and "+duraTimeMm+"min")

            let duraArrow = arrowPerHour*duraTime

            $('.duraArrow').text(duraArrow.toFixed(0))

            let duraMp = mpPerHour*duraTime

            $('.duraMp').text(duraMp.toFixed(0))

            let duraHp = hpPerHour*duraTime

            $('.duraHp').text(duraHp.toFixed(0))

            let xpGained = killsPerHour*avgMobXp*duraTime

            let xpGainedPerc = xpGained / lvlUpExp *100

            $('.xpGained').text(xpGainedPerc.toFixed(2))

            let spGained = killsPerHour*spPerMob*duraTime

            $('.spGained').text(spGained.toFixed(0))

            let mobsKilled = killsPerHour*duraTime

            $('.mobsKilled').text(mobsKilled.toFixed(0))

            let afkTime = $('#afkTime').val()
            let afkArrow = afkTime*arrowPerHour
            let afkArrowStack = afkArrow/stackArrows
            
            let afkMp = afkTime*mpPerHour
            let afkMpStack = afkMp/stackPot

            let afkHp = afkTime*hpPerHour
            let afkHpStack = afkHp/stackPot

            // <li><span class="afkPills">xx</span> Pills (<span class="afkPillsStack"></span> Stack)</li>
            let afkPills = afkTime*pillsPerHour
            let afkPillsStack = afkPills/stackPills

            let afkHammer = afkTime/duraTime
            let afkXp = afkTime*xpPerHourPerc
            let afkSp = afkTime*spPerHour

            
            $('.afkArrow').text(afkArrow)
            $('.afkArrowStack').text(Math.ceil(afkArrowStack))


            $('.afkMp').text(afkMp)
            $('.afkMpStack').text(Math.ceil(afkMpStack))
            $('.afkHp').text(afkHp)
            $('.afkHpStack').text(Math.ceil(afkHpStack))

            
            $('.afkPills').text(afkPills)
            $('.afkPillsStack').text(Math.ceil(afkPillsStack))

            $('.afkHammer').text(Math.ceil(afkHammer))
            
            $('.afkXp').text(afkXp.toFixed(2))
            $('.afkSp').text(afkSp.toFixed(0))


            }

            

        sroCalc();
    

    function runAll() {
        sroCalc();
       
    }
        $('input')
            .on('keyup', function(){
                runAll();
                saveSettings();
            })
            .on('click', function(){
                runAll();
                saveSettings();
            })



    


});