async function insertionSort() {
  const delayTime = parseInt(speed.value) / 10;
  let elementArr = [...elements.getElementsByClassName("ele")];
  let heightArr = elementArr.map((ele) =>
    parseFloat(getComputedStyle(ele).height)
  );
  for (let i = 0; i < elementArr.length; i++) {
    let pres = i;
    let prev = i - 1;
    for (; prev >= 0 && heightArr[prev] > heightArr[pres]; pres--, prev--) {
      error(elementArr[pres], elementArr[prev]);
      await delay(delayTime);
      elementArr[pres].style.height = `${heightArr[prev]}px`;
      elementArr[prev].style.height = `${heightArr[pres]}px`;

      let temp = heightArr[pres];
      heightArr[pres] = heightArr[prev];
      heightArr[prev] = temp;
      await delay(delayTime);
      successful(elementArr[pres], elementArr[prev]);
      await delay(delayTime);
      reset(elementArr[pres], elementArr[prev]);
    }
    for (let j = 0; j <= i; j++) {
      elementArr[
        j
      ].style.background = `linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)`;
    }
  }
}
function descriptionInsertionSort() {
  javaButton.style.backgroundColor = `rgb(40, 44, 52)`;
  let desc = `Insertion sort isa simple sorting algorithm that works similar to the way we sort while playing cards. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are piucked and placed at the correct position in the sorted part.<br/><br/> Characteristics of Insertion Sort: <br/>1.This algorithm is one of the simplest algorithm with simple implementation. <br/> 2.Basically ,Insertion  sort is effiecient for small data values. <br/>3.Insertion sort is adaptive in nature , i.e its appropriate for data sets which are already partially sorted.  `;
  let worst = `O(N<sup>2</sup>)`;
  let average = `O(N<sup>2</sup>)`;
  let best = `O(N)`;
  let space = `O(1)`;

  let JavaProg = `<pre>
 <code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;display:block;padding: .5em;"> <span style="color:rgb(171, 178, 191); font-weight:400;"><span style="color:rgb(198, 120, 221); font-weight:400;">public</span> <span style="color:rgb(198, 120, 221); font-weight:400;">static</span> <span style="color:rgb(198, 120, 221); font-weight:400;">void</span> <span style="color:rgb(97, 174, 238); font-weight:400;">insertionSort</span>(<span style="color:rgb(171, 178, 191); font-weight:400;"><span style="color:rgb(230, 192, 123); font-weight:400;">int</span> arr[]</span>)</span> {
    <span style="color:rgb(198, 120, 221); font-weight:400;">for</span> (<span style="color:rgb(230, 192, 123); font-weight:400;">int</span> i = <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>; i &lt; arr.length; i++) {
        <span style="color:rgb(230, 192, 123); font-weight:400;">int</span> pres = i;
        <span style="color:rgb(230, 192, 123); font-weight:400;">int</span> prev = i - <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>;
        <span style="color:rgb(198, 120, 221); font-weight:400;">for</span> (; prev &gt;= <span style="color:rgb(209, 154, 102); font-weight:400;">0</span> &amp;&amp; arr[pres] &lt; arr[prev];
        prev--, pres--) {
            <span style="color:rgb(230, 192, 123); font-weight:400;">int</span> temp = arr[pres];
            arr[pres] = arr[prev];
            arr[prev] = temp;
        }
    }
    System.<span style="color:rgb(198, 120, 221); font-weight:400;">out</span>.println(Arrays.toString(arr));
}
</code></pre>`;

  let JavaScriptProg = `<pre>
 <code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;display:block;padding: .5em;"><span style="color:rgb(171, 178, 191); font-weight:400;"><span style="color:rgb(198, 120, 221); font-weight:400;">function</span> <span style="color:rgb(97, 174, 238); font-weight:400;">insertionSort</span>(<span style="color:rgb(171, 178, 191); font-weight:400;">arr</span>) </span>{
  <span style="color:rgb(198, 120, 221); font-weight:400;">for</span> (<span style="color:rgb(198, 120, 221); font-weight:400;">let</span> i = <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>; i &lt; arr.length; i++) {
    <span style="color:rgb(198, 120, 221); font-weight:400;">let</span> pres = i;
    <span style="color:rgb(198, 120, 221); font-weight:400;">let</span> prev = i - <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>;
    <span style="color:rgb(198, 120, 221); font-weight:400;">for</span> (;  prev &gt;= <span style="color:rgb(209, 154, 102); font-weight:400;">0</span> &amp;&amp; arr[pres] &lt; arr[prev];
    prev--, pres--) {
      <span style="color:rgb(198, 120, 221); font-weight:400;">let</span> temp = arr[pres];
      arr[pres] = arr[prev];
      arr[prev] = temp;
    }
  }
  <span style="color:rgb(230, 192, 123); font-weight:400;">console</span>.log(arr);
}
</code></pre>`;
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
