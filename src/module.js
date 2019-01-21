const t=0
const x=96
const y=24

module.exports = function()
{
	if(btn(0))y--
	if(btn(1))y++
	if(btn(2))x--
	if(btn(3))x++

	cls(13)
	spr(1+((t%60)/30|0)*2,x,y,14,3,0,0,2,2)
	print("Loading modules!",84,84)
	t++
}
