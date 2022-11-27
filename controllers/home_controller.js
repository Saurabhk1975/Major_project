module.exports.home = function(req,res){
    return res.render('home',{
        title:"Home"
    });
}

//module.exports.<functionname> = function(req,res){}