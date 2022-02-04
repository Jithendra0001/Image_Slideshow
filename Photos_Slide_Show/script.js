var i=0;
function javascript(n)
{
    i+=n;
    let Show_image=document.getElementsByClassName("image");
    if(i>=Show_image.length) i=0;
    if(i<0) i=Show_image.length-1;
    for(let j=0;j<Show_image.length;j++)
    {
        Show_image[j].style.display="none";
    }
    Show_image[i].style.display="block";
}
javascript(0);
