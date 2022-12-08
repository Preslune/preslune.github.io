$(document).ready(function() {

    let totalSlide = $('.slider div.slides div.slide').length
    let slideWidth = $('.slider div.slides div.slide').width()
    let slideHeight = $('.slider div.slides div.slide').height()
    let totalWidth = totalSlide * slideWidth

    $('.slider').css({width : slideWidth, height : slideHeight})
    $('.slider div.slides').css({width : totalWidth, marginLeft : -slideWidth})
    $('.slider div.slides div.slide:last-child').prependTo('.slider div.slides')

    $('#prev').click(function(){
        $('.slider div.slides').animate({
            left : slideWidth
        }, 1000, function (){
            $('.slider div.slides div.slide:last-child').prependTo('.slider div.slides')
            $('.slider div.slides').css({left : ''})
        })

    })

    $('#next').click(function(){
        $('.slider div.slides').animate({
            left : -slideWidth
        }, 1000, function (){
            $('.slider div.slides div.slide:first-child').appendTo('.slider div.slides')
            $('.slider div.slides').css({left : ''})
        })

    })

    $('#breach').click(function() {
        let body = document.getElementsByTagName("body")[0]
        if(window.screen.width <= 600){
            body.style.width = '540px';
        }
        let b = document.getElementById('brimstoneimage')
        b.style.display = 'none';
        let c = document.getElementById('erialimage')
        c.style.display = 'none';
        let d = document.getElementById('feilyimage')
        d.style.display = 'none';
        let e = document.getElementById('jettimage')
        e.style.display = 'none';
        let f = document.getElementById('killjoyimage')
        f.style.display = 'none';
        let g = document.getElementById('reynaimage')
        g.style.display = 'none';
        let h = document.getElementById('sageimage')
        h.style.display = 'none';
        let i = document.getElementById('inueimage')
        i.style.display = 'none';
        let j = document.getElementById('rylahimage')
        j.style.display = 'none';
        let x = document.getElementById('breachimage')
        if(x.style.display === 'block'){
            x.style.display = 'none';
            return;
        }
        x.style.display = 'block';  
    })

    $('#brimstone').click(function() {
        let body = document.getElementsByTagName("body")[0]
        if(window.screen.width <= 600){
            body.style.width = '540px';
        }
        let a = document.getElementById('breachimage')
        a.style.display = 'none';
        let c = document.getElementById('erialimage')
        c.style.display = 'none';
        let d = document.getElementById('feilyimage')
        d.style.display = 'none';
        let e = document.getElementById('jettimage')
        e.style.display = 'none';
        let f = document.getElementById('killjoyimage')
        f.style.display = 'none';
        let g = document.getElementById('reynaimage')
        g.style.display = 'none';
        let h = document.getElementById('sageimage')
        h.style.display = 'none';
        let i = document.getElementById('inueimage')
        i.style.display = 'none';
        let j = document.getElementById('rylahimage')
        j.style.display = 'none';
        let x = document.getElementById('brimstoneimage')
        if(x.style.display === 'block'){
            x.style.display = 'none';
            return;
        }
        x.style.display = 'block';  
        
    })

    $('#erial').click(function() {
        let body = document.getElementsByTagName("body")[0]
        if(window.screen.width <= 600){
            body.style.width = '540px';
        }
        let a = document.getElementById('breachimage')
        a.style.display = 'none';
        let b = document.getElementById('brimstoneimage')
        b.style.display = 'none';
        let d = document.getElementById('feilyimage')
        d.style.display = 'none';
        let e = document.getElementById('jettimage')
        e.style.display = 'none';
        let f = document.getElementById('killjoyimage')
        f.style.display = 'none';
        let g = document.getElementById('reynaimage')
        g.style.display = 'none';
        let h = document.getElementById('sageimage')
        h.style.display = 'none';
        let i = document.getElementById('inueimage')
        i.style.display = 'none';
        let j = document.getElementById('rylahimage')
        j.style.display = 'none';
        let x = document.getElementById('erialimage')
        if(x.style.display === 'block'){
            x.style.display = 'none';
            return;
        }
        x.style.display = 'block';  
        
    })

    $('#feily').click(function() {
        let body = document.getElementsByTagName("body")[0]
        if(window.screen.width <= 600){
            body.style.width = '540px';
        }
        let a = document.getElementById('breachimage')
        a.style.display = 'none';
        let b = document.getElementById('brimstoneimage')
        b.style.display = 'none';
        let c = document.getElementById('erialimage')
        c.style.display = 'none';
        let e = document.getElementById('jettimage')
        e.style.display = 'none';
        let f = document.getElementById('killjoyimage')
        f.style.display = 'none';
        let g = document.getElementById('reynaimage')
        g.style.display = 'none';
        let h = document.getElementById('sageimage')
        h.style.display = 'none';
        let i = document.getElementById('inueimage')
        i.style.display = 'none';
        let j = document.getElementById('rylahimage')
        j.style.display = 'none';
        let x = document.getElementById('feilyimage')
        if(x.style.display === 'block'){
            x.style.display = 'none';
            return;
        }
        x.style.display = 'block';  
    })

    $('#inue').click(function() {
        let body = document.getElementsByTagName("body")[0]
        if(window.screen.width <= 600){
            body.style.width = '540px';
        }
        let a = document.getElementById('breachimage')
        a.style.display = 'none';
        let b = document.getElementById('brimstoneimage')
        b.style.display = 'none';
        let c = document.getElementById('erialimage')
        c.style.display = 'none';
        let d = document.getElementById('feilyimage')
        d.style.display ='none'
        let e = document.getElementById('jettimage')
        e.style.display = 'none';
        let f = document.getElementById('killjoyimage')
        f.style.display = 'none';
        let g = document.getElementById('reynaimage')
        g.style.display = 'none';
        let h = document.getElementById('sageimage')
        h.style.display = 'none';
        // let i = document.getElementById('inueimage')
        // i.style.display = 'none';
        let j = document.getElementById('rylahimage')
        j.style.display = 'none';
        let x = document.getElementById('inueimage')
        if(x.style.display === 'block'){
            x.style.display = 'none';
            return;
        }
        x.style.display = 'block';  
    })

    $('#jett').click(function() {
        let body = document.getElementsByTagName("body")[0]
        if(window.screen.width <= 600){
            body.style.width = '540px';
        }
        let a = document.getElementById('breachimage')
        a.style.display = 'none';
        let b = document.getElementById('brimstoneimage')
        b.style.display = 'none';
        let c = document.getElementById('erialimage')
        c.style.display = 'none';
        let d = document.getElementById('feilyimage')
        d.style.display = 'none';
        let f = document.getElementById('killjoyimage')
        f.style.display = 'none';
        let g = document.getElementById('reynaimage')
        g.style.display = 'none';
        let h = document.getElementById('sageimage')
        h.style.display = 'none';
        let i = document.getElementById('inueimage')
        i.style.display = 'none';
        let j = document.getElementById('rylahimage')
        j.style.display = 'none';
        let x = document.getElementById('jettimage')
        if(x.style.display === 'block'){
            x.style.display = 'none';
            return;
        }
        x.style.display = 'block';  
        
    })

    $('#killjoy').click(function() {
        let body = document.getElementsByTagName("body")[0]
        if(window.screen.width <= 600){
            body.style.width = '540px';
        }
        let a = document.getElementById('breachimage')
        a.style.display = 'none';
        let b = document.getElementById('brimstoneimage')
        b.style.display = 'none';
        let c = document.getElementById('erialimage')
        c.style.display = 'none';
        let d = document.getElementById('feilyimage')
        d.style.display = 'none';
        let e = document.getElementById('jettimage')
        e.style.display = 'none';
        let g = document.getElementById('reynaimage')
        g.style.display = 'none';
        let h = document.getElementById('sageimage')
        h.style.display = 'none';
        let i = document.getElementById('inueimage')
        i.style.display = 'none';
        let j = document.getElementById('rylahimage')
        j.style.display = 'none';
        let x = document.getElementById('killjoyimage')
        if(x.style.display === 'block'){
            x.style.display = 'none';
            return;
        }
        x.style.display = 'block';  
    })

    $('#reyna').click(function() {
        let body = document.getElementsByTagName("body")[0]
        if(window.screen.width <= 600){
            body.style.width = '540px';
        }
        let a = document.getElementById('breachimage')
        a.style.display = 'none';
        let b = document.getElementById('brimstoneimage')
        b.style.display = 'none';
        let c = document.getElementById('erialimage')
        c.style.display = 'none';
        let d = document.getElementById('feilyimage')
        d.style.display = 'none';
        let e = document.getElementById('jettimage')
        e.style.display = 'none';
        let f = document.getElementById('killjoyimage')
        f.style.display = 'none';
        let h = document.getElementById('sageimage')
        h.style.display = 'none';
        let i = document.getElementById('inueimage')
        i.style.display = 'none';
        let j = document.getElementById('rylahimage')
        j.style.display = 'none';
        let x = document.getElementById('reynaimage')
        if(x.style.display === 'block'){
            x.style.display = 'none';
            return;
        }
        x.style.display = 'block';  
    })

    $('#sage').click(function() {
        let body = document.getElementsByTagName("body")[0]
        if(window.screen.width <= 600){
            body.style.width = '540px';
        }
        let a = document.getElementById('breachimage')
        a.style.display = 'none';
        let b = document.getElementById('brimstoneimage')
        b.style.display = 'none';
        let c = document.getElementById('erialimage')
        c.style.display = 'none';
        let d = document.getElementById('feilyimage')
        d.style.display = 'none';
        let e = document.getElementById('jettimage')
        e.style.display = 'none';
        let f = document.getElementById('killjoyimage')
        f.style.display = 'none';
        let g = document.getElementById('reynaimage')
        g.style.display = 'none';
        let i = document.getElementById('inueimage')
        i.style.display = 'none';
        let j = document.getElementById('rylahimage')
        j.style.display = 'none';
        let x = document.getElementById('sageimage')
        if(x.style.display === 'block'){
            x.style.display = 'none';
            return;
        }
        x.style.display = 'block';  
    })

    $('#rylah').click(function() {
        let body = document.getElementsByTagName("body")[0]
        if(window.screen.width <= 600){
            body.style.width = '540px';
        }
        let a = document.getElementById('breachimage')
        a.style.display = 'none';
        let b = document.getElementById('brimstoneimage')
        b.style.display = 'none';
        let c = document.getElementById('erialimage')
        c.style.display = 'none';
        let d = document.getElementById('feilyimage')
        d.style.display = 'none';
        let e = document.getElementById('jettimage')
        e.style.display = 'none';
        let f = document.getElementById('killjoyimage')
        f.style.display = 'none';
        let g = document.getElementById('reynaimage')
        g.style.display = 'none';
        let i = document.getElementById('inueimage')
        i.style.display = 'none';
        let j = document.getElementById('sageimage')
        j.style.display = 'none';
        let x = document.getElementById('rylahimage')
        if(x.style.display === 'block'){
            x.style.display = 'none';
            return;
        }
        x.style.display = 'block';  
    })
})