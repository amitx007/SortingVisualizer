async function quickSort() {
  const delayTime = parseInt(speed.value) / 10;
  let elementArr = [...elements.getElementsByClassName("ele")];
  let heightArr = elementArr.map((ele) =>
    parseFloat(getComputedStyle(ele).height)
  );
  await qs(elementArr, heightArr, 0, elementArr.length - 1, delayTime);
}

async function qs(elearr, heiarr, start, end, delayTime) {
  if (start >= end) {
    if (start < elearr.length) {
      elearr[
        start
      ].style.background = `linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)`;
      elearr[start].innerText = "";
    }
    return;
  }
  let partitionx = await partition(elearr, heiarr, start, end, delayTime);
  elearr[
    partitionx
  ].style.background = `linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)`;
  elearr[partitionx].innerText = "";

  qs(elearr, heiarr, start, partitionx - 1, delayTime);
  qs(elearr, heiarr, partitionx + 1, end, delayTime);
}
async function partition(elearr, heiarr, start, end, delayTime) {
  let pivot = end;
  let i = start;
  let j = end - 1;
  elearr[pivot].style.background = "yellow";
  elearr[pivot].innerText = "PIVOT";
  elearr[i].style.color = "black";
  elearr[j].style.color = "black";
  elearr[i].innerText = "START";
  elearr[j].innerText = "END";
  while (i <= j) {
    while (i <= j && heiarr[i] < heiarr[pivot]) {
      successful(elearr[i], null);
      await delay(delayTime);
      reset(elearr[i], null);
      i++;
    }
    while (i <= j && heiarr[j] > heiarr[pivot]) {
      successful(elearr[j], null);
      await delay(delayTime);
      reset(elearr[j], null);
      j--;
    }
    if (i < j) {
      error(elearr[i], elearr[j]);
      await delay(delayTime);
      elearr[i].style.height = `${heiarr[j]}px`;
      elearr[j].style.height = `${heiarr[i]}px`;
      let temp = heiarr[i];
      heiarr[i] = heiarr[j];
      heiarr[j] = temp;
      await delay(delayTime);
      successful(elearr[i], elearr[j]);
      await delay(delayTime);
      reset(elearr[i], elearr[j]);
    }
  }
  await delay(delayTime);
  elearr[pivot].style.height = `${heiarr[i]}px`;
  reset(elearr[pivot], null);
  elearr[i].style.height = `${heiarr[pivot]}px`;
  elearr[i].style.background = `yellow`;
  await delay(delayTime);
  successful(elearr[i], elearr[pivot]);
  await delay(delayTime);
  reset(elearr[i], elearr[pivot]);
  elearr[start].innerText = "";
  elearr[end - 1].innerText = "";
  let temp = heiarr[i];
  heiarr[i] = heiarr[pivot];
  heiarr[pivot] = temp;
  return i;
}
function descriptionQuickSort() {
  javaButton.style.backgroundColor = `rgb(40, 44, 52)`;

  let desc = `Quick sort is a Divide and Conqure algorithm . It picks an element as a pivot element and partition the given array aroound the picked pivot. There are many different version of quick sort that pick pivot in different ways. <br/> <br/> 1.picking up the first element as pivot element. <br/> 2. picking up the last element as a pivot element. <b>(Implemented above)</b> <br/>Picking up a random element as a pivot element. <br/> Pick a median as the pivot.<br/> <br/> The key process in quickSort is a partition(). The target of partition is, given an array and an elements x of an array as the pivot , put x at its correct position in a sorted array and put all the smaller elements (smaller than x) before x, and put all the greater elements (greater than x) after x. All this should be done in linear time.`;

  let worst = `O(N<sup>2</sup>)`;
  let average = `O(NLOGN)`;
  let best = `O(NLOGN)`;
  let space = `O(1)`;

  let JavaProg = `<pre>
 <code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;display:block;padding: .5em;"> <span style="color:rgb(171, 178, 191); font-weight:400;"><span style="color:rgb(198, 120, 221); font-weight:400;">public</span> <span style="color:rgb(198, 120, 221); font-weight:400;">static</span> <span style="color:rgb(198, 120, 221); font-weight:400;">void</span> <span style="color:rgb(97, 174, 238); font-weight:400;">quickSort</span><span style="color:rgb(171, 178, 191); font-weight:400;">(<span style="color:rgb(198, 120, 221); font-weight:400;">int</span> arr[], <span style="color:rgb(198, 120, 221); font-weight:400;">int</span> start, <span style="color:rgb(198, 120, 221); font-weight:400;">int</span> end)</span> </span>{
        <span style="color:rgb(198, 120, 221); font-weight:400;">if</span> (start&lt;end) {
            <span style="color:rgb(198, 120, 221); font-weight:400;">int</span> partition = <span style="color:rgb(230, 192, 123); font-weight:400;">partition</span>(arr, start, end);
            <span style="color:rgb(230, 192, 123); font-weight:400;">quickSort</span>(arr, start, partition - <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>);
            <span style="color:rgb(230, 192, 123); font-weight:400;">quickSort</span>(arr, partition + <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>, end);
        }
    }
<span style="color:rgb(171, 178, 191); font-weight:400;"><span style="color:rgb(198, 120, 221); font-weight:400;">public</span> <span style="color:rgb(198, 120, 221); font-weight:400;">static</span> <span style="color:rgb(198, 120, 221); font-weight:400;">int</span> <span style="color:rgb(97, 174, 238); font-weight:400;">partition</span><span style="color:rgb(171, 178, 191); font-weight:400;">(<span style="color:rgb(198, 120, 221); font-weight:400;">int</span> arr[], <span style="color:rgb(198, 120, 221); font-weight:400;">int</span> start, <span style="color:rgb(198, 120, 221); font-weight:400;">int</span> end)</span> </span>{
    <span style="color:rgb(92, 99, 112); font-weight:400;">// pivot element is last </span>
    <span style="color:rgb(198, 120, 221); font-weight:400;">int</span> pivot = end;
    <span style="color:rgb(198, 120, 221); font-weight:400;">int</span> i = start;
    <span style="color:rgb(198, 120, 221); font-weight:400;">int</span> j = end - <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>;
    <span style="color:rgb(198, 120, 221); font-weight:400;">for</span> (; i &lt;=j;) {
        <span style="color:rgb(198, 120, 221); font-weight:400;">for</span> (;i&lt;=j &amp;&amp; arr[i] &lt; arr[pivot];){i++;}
        <span style="color:rgb(198, 120, 221); font-weight:400;">for</span> ( ; i &lt;=j &amp;&amp; arr[j] &gt; arr[pivot];){j--;}
        <span style="color:rgb(198, 120, 221); font-weight:400;">if</span> (i &lt; j) {
            <span style="color:rgb(198, 120, 221); font-weight:400;">int</span> temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
    <span style="color:rgb(198, 120, 221); font-weight:400;">int</span> temp = arr[i];
    arr[i] = arr[pivot];
    arr[pivot] = temp;
    <span style="color:rgb(198, 120, 221); font-weight:400;">return</span> i;
}</code></pre>`;

  let JavaScriptProg = `<pre>
 <code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;display:block;padding: .5em;"><span style="color:rgb(171, 178, 191); font-weight:400;"><span style="color:rgb(198, 120, 221); font-weight:400;">function</span> <span style="color:rgb(97, 174, 238); font-weight:400;">quickSort</span>(<span style="color:rgb(171, 178, 191); font-weight:400;">arr, start, end</span>) </span>{
  <span style="color:rgb(198, 120, 221); font-weight:400;">if</span> (start&gt;=end) {
    <span style="color:rgb(198, 120, 221); font-weight:400;">return</span>;
  }
  <span style="color:rgb(198, 120, 221); font-weight:400;">let</span> partition = Partition(arr, start, end);
  quickSort(arr, start, partition - <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>);
  quickSort(arr, partition+<span style="color:rgb(209, 154, 102); font-weight:400;">1</span>, end);
}
<span style="color:rgb(171, 178, 191); font-weight:400;"><span style="color:rgb(198, 120, 221); font-weight:400;">function</span> <span style="color:rgb(97, 174, 238); font-weight:400;">Partition</span>(<span style="color:rgb(171, 178, 191); font-weight:400;">arr,start, end </span>) </span>{
  <span style="color:rgb(198, 120, 221); font-weight:400;">let</span> pivot = end;
  <span style="color:rgb(198, 120, 221); font-weight:400;">let</span> i = start; 
  <span style="color:rgb(198, 120, 221); font-weight:400;">let</span> j = end - <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>;
  <span style="color:rgb(198, 120, 221); font-weight:400;">while</span> (i&lt;=j) {
    <span style="color:rgb(198, 120, 221); font-weight:400;">while</span> (i &lt;= j &amp;&amp; arr[i] &lt; arr[pivot]) { 
      i++;
    }
    <span style="color:rgb(198, 120, 221); font-weight:400;">while</span> (i &lt;= j &amp;&amp; arr[j] &gt; arr[pivot]) { 
      j--;
    }
    <span style="color:rgb(198, 120, 221); font-weight:400;">if</span> (i&lt;j) {
      <span style="color:rgb(198, 120, 221); font-weight:400;">let</span> temp = arr[i];
      arr[i] = arr[j]
      arr[j] = temp;
    }
  }
  <span style="color:rgb(198, 120, 221); font-weight:400;">let</span> temp = arr[i];
  arr[i] = arr[pivot];
  arr[pivot] = temp;
  <span style="color:rgb(198, 120, 221); font-weight:400;">return</span> i;
}</code></pre>`;
    
  aboutCode.innerHTML = JavaProg;
  aboutPara.innerHTML = desc;
  worstTC.innerHTML = worst;
  averageTC.innerHTML = average;
  bestTC.innerHTML = best;
  spaceC.innerHTML = space;

  javaButton.addEventListener("click", () => {
    javaButton.style.backgroundColor = `rgb(40, 44, 52)`;
    javaScriptButton.style.backgroundColor = `rgb(26 26 26)`;
    aboutCode.innerHTML = JavaProg;
  });
  javaScriptButton.addEventListener("click", () => {
    javaButton.style.backgroundColor = `rgb(26 26 26)`;
    javaScriptButton.style.backgroundColor = `rgb(40, 44, 52)`;
    aboutCode.innerHTML = JavaScriptProg;
  });
}
