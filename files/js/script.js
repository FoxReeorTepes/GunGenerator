$(document).ready(function(){
    var command = "/give @p cgm:rifle 1 0 {";
    command += "}"; 
    document.getElementById('command').innerHTML = command;
});

function gen() {

	var adDamage = $('#adDamageText').val(); 
	var rate = $('#rateText').val(); 
	var item = $("#item").val(); 
	var scopes = $("#scopes").val();
	var gunProjectile = $('#gunProjectile').val(); 
	var spread = $("#spreadText").val(); 
	var maxAmmo = $("#maxAmmoText").val();
	var projectileAmount = $('#projectileAmountText').val();
	var damage = $('#damageText').val();
	var speed = $('#speedText').val();
	var life = $('#lifeText').val();
	var trailMult = $('#trailMultText').val();
	var reloadSpeed = $('#reloadSpeedText').val();
	var ammoCount = $('#ammoCountText').val();

	var trailColor = $("#trailColorChoice").val();
	newTrailColor = trailColor.replace('#', '');
	var colorGun = $("#colorGunChoice").val();
	newColorGun = colorGun.replace('#', '');
	var barrelColor = $("#barrelColorChoice").val();
	newBarrelColor = barrelColor.replace('#', '');
	var scopeColor = $("#scopeColorChoice").val();
	newScopeColor = scopeColor.replace('#', '');
	const hexToDecimal = hex => parseInt(hex, 16);
	const dec = hexToDecimal(newTrailColor);
	const dec2 = hexToDecimal(newColorGun);
	const dec3 = hexToDecimal(newBarrelColor);
	const dec4 = hexToDecimal(newScopeColor);

	var general = [];
	var properties = [];
	var projectile = [];
	var attachments = [];
	var tags = []; 
	var command = "/give @p cgm:";

	if ($('#gun').is(":checked")) {
		document.getElementById('generalS').style.color = "#ffbbbb"
		document.getElementById('projectileS').style.color = "#c3ffbb"
		if ($('#general').is(":checked")) {
			{document.getElementById('generalGroup').style.color= "#ff6d6d";}

			if ($('#auto').is(":checked"))
			{general.push("auto:1b")}

			if ($('#alwaysSpread').is(":checked"))
			{general.push("alwaysSpread:0b")}

			if ($('#rate').is(":checked")) 
			{document.getElementById('rateInput').style.display = "block"; 
				general.push("rate:"+rate+"");
			} else {document.getElementById('rateInput').style.display = "none";}
			
			if ($('#spread').is(":checked")) 
			{document.getElementById('spreadInput').style.display = "block"; 
				general.push("spread:"+spread+"f");
			} else {document.getElementById('spreadInput').style.display = "none";}

			if ($('#maxAmmo').is(":checked")) 
			{document.getElementById('maxAmmoInput').style.display = "block"; 
				general.push("maxAmmo:"+maxAmmo+""); 
			} else {document.getElementById('maxAmmoInput').style.display = "none";}

			if ($('#projectileAmount').is(":checked")) 
			{document.getElementById('projectileAmountInput').style.display = "block"; 
				general.push("projectileAmount:"+projectileAmount+""); 
			} else {document.getElementById('projectileAmountInput').style.display = "none";}
			
			if ($('#reloadSpeed').is(":checked")) 
			{document.getElementById('reloadSpeedInput').style.display = "block"; 
				general.push("reloadSpeed:"+reloadSpeed+""); 
			} else {document.getElementById('reloadSpeedInput').style.display = "none";}

			properties.push("general:{"+general+"}");
		} else {document.getElementById('generalGroup').style.color = "gray"}

		if ($('#projectile').is(":checked")) {
			{document.getElementById('projectileGroup').style.color = "#88c36d"}

			if ($('#gravity').is(":checked")) 
			{projectile.push("gravity:1b");}
		
			if (document.getElementById('gunProjectile').value != "Nope")
			{projectile.push(gunProjectile);} else {void[0]}
		
			if ($('#visible').is(":checked"))
			{projectile.push("visible:0b");}
		
			if ($('#damage').is(":checked")) 
			{document.getElementById('damageInput').style.display = "block"; 
				projectile.push("damage:"+damage+"f"); 
			} else {document.getElementById('damageInput').style.display = "none";}
		
			if ($('#speed').is(":checked")) 
			{document.getElementById('speedInput').style.display = "block"; 
				projectile.push("speed:"+speed+"d"); 
			} else {document.getElementById('speedInput').style.display = "none";}
		
			if ($('#life').is(":checked")) 
			{document.getElementById('lifeInput').style.display = "block"; 
				projectile.push("life:"+life+""); 
			} else {document.getElementById('lifeInput').style.display = "none";}
		
			if ($('#damageReduceOverLife').is(":checked"))
			{projectile.push("damageReduceOverLife:1b");}
		
			if ($('#damageReduceIfNotZoomed').is(":checked"))
			{projectile.push("damageReduceIfNotZoomed:1b");}
		
			if ($('#trailColor').is(":checked"))
			{document.getElementById('trailColorChoiceInput').style.display = "block";
				projectile.push("trailColor:"+dec+"");
			} else {document.getElementById('trailColorChoiceInput').style.display = "none";}
		
			if ($('#trailMult').is(":checked")) 
			{document.getElementById('trailMultInput').style.display = "block"; 
				projectile.push("trailLengthMultiplier:"+trailMult+"d"); 
			} else {document.getElementById('trailMultInput').style.display = "none";}
		
			
			properties.push("projectile:{"+projectile+"}"); projectile.join(",");
		} else {
			document.getElementById('projectileGroup').style.color = "gray"
		}
		tags.push("Gun:{"+properties+"}"); properties.join(",");
	} else {
		document.getElementById('projectileS').style.color = "gray"
		document.getElementById('generalS').style.color = "gray"
		document.getElementById('projectileGroup').style.color = "gray"
		document.getElementById('generalGroup').style.color = "gray"
	}

	if ($('#attachments').is(":checked")) {
		document.getElementById('attachmentsInput').style.display = "block";
		
		if (document.getElementById('scopes').value != "Nope"){
			if ($('#scopeColor').is(":checked")) {
				document.getElementById('scopeColorChoiceInput').style.display = "block";
				attachments.push(scopes+",tag:{color:"+dec4+"}}")
			} else {
				document.getElementById('scopeColorChoiceInput').style.display = "none";
				attachments.push(scopes);
			}
		} else {void[0]}

		if ($('#barrel').is(":checked")) {
			if ($('#barrelColor').is(":checked")) {
				document.getElementById('barrelColorChoiceInput').style.display = "block";
				attachments.push('barrel:{id:"cgm:silencer",Count:1b,Damage:0,tag:{color:'+dec3+'}}')
			} else {
			document.getElementById('barrelColorChoiceInput').style.display = "none";
			attachments.push('barrel:{id:"cgm:silencer",Count:1b,Damage:0}')
		}}
		
		tags.push("attachments:{"+attachments+"}"); attachments.join(",");
	} else {
		document.getElementById('attachmentsInput').style.display = "none";
	}

	if ($('#colorGun').is(":checked"))
	{document.getElementById('colorGunInput').style.display = "block";
		tags.push("color:"+dec2+"");
	} else {document.getElementById('colorGunInput').style.display = "none";}

	if ($('#ignoreammo').is(":checked")) 
	{tags.push("IgnoreAmmo:1b");}

	if ($('#adDamage').is(":checked")) 
	{document.getElementById('adDamageInput').style.display = "block"; 
		tags.push("AdditionalDamage:"+adDamage+"f"); 
	} else {document.getElementById('adDamageInput').style.display = "none";}

	if ($('#ammoCount').is(":checked")) 
	{document.getElementById('ammoCountInput').style.display = "block"; 
		tags.push("AmmoCount:"+ammoCount+""); 
	} else {document.getElementById('ammoCountInput').style.display = "none";}

	command += item;
	command += " 1 0 {";
	command += tags.join(",");
	command += "}"; 


	document.getElementById('command').innerHTML = command; 
}