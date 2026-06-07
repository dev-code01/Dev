let display="";
function push(num)
{
    document.getElementById("dis").value += num;
}
function op(opr)
{
    let a=document.getElementById("dis").value;
    a=eval(a)+opr;
    document.getElementById("dis").value=a;
}
function res()
{
    let r=document.getElementById("dis").value;
    document.getElementById("dis").value=eval(r);
}
function clr()
{
    dis="";
    document.getElementById("dis").value=dis;
}