async function selectionSort() {
  const delayTime = parseInt(speed.value) / 10;
  let elementArr = [...elements.getElementsByClassName("ele")];
  let heightArr = elementArr.map((ele) =>
    parseFloat(getComputedStyle(ele).height)
  );

  for (let i = 0; i < elementArr.length; i++) {
    error(elementArr[i], null);
    let min = i;
    for (let j = i + 1; j < elementArr.length; j++) {
      error(null, elementArr[j]);
      await delay(delayTime);
      reset(null, elementArr[j]);
      if (heightArr[min] > heightArr[j]) {
        min = j;
      }
    }
    await delay(delayTime);
    error(elementArr[i], elementArr[min]);
    await delay(delayTime);
    elementArr[i].style.height = `${heightArr[min]}px`;
    elementArr[min].style.height = `${heightArr[i]}px`;

    let temp = heightArr[i];
    heightArr[i] = heightArr[min];
    heightArr[min] = temp;
    await delay(delayTime);
    successful(elementArr[i], elementArr[min]);
    await delay(delayTime);
    reset(elementArr[i], elementArr[min]);
    elementArr[
      i
    ].style.background = `linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)`;
  }
}

// documentation
function descriptionSelectionSort() {
  javaButton.style.backgroundColor = `rgb(40, 44, 52)`;

  let desc = `The Selection sort algorithm an arrayu by repeatedly finding the minimum element (for ascending order) from the unsorted part and putting it at the beginning. <br/> <br/> The algorithm maintains 2 subarrays in a given array. <br/></br> 1. The subarray which is already sorted . <br/> 2.The remaining subarray was unsorted.<br/><br/><br/>In every iteration of the selection sort , the minimum element (considering ascending order) from the unsorted subaaray is picked and moved to sorted subarray.`;

  let worst = `O(N<sup>2</sup>)`;
  let average = `O(N<sup>2</sup>)`;
  let best = `O(N<sup>2</sup>)`;
  let space = `O(1)`;

  let JavaProg = `<pre>
 <code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;;display:block;padding: .5em;"><span style="color:rgb(171, 178, 191); font-weight:400;"><span style="color:rgb(198, 120, 221); font-weight:400;">public</span> <span style="color:rgb(198, 120, 221); font-weight:400;">static</span> <span style="color:rgb(198, 120, 221); font-weight:400;">void</span> <span style="color:rgb(97, 174, 238); font-weight:400;">selectionSort</span>(<span style="color:rgb(171, 178, 191); font-weight:400;"><span style="color:rgb(230, 192, 123); font-weight:400;">int</span> arr[]</span>)</span> {
        <span style="color:rgb(198, 120, 221); font-weight:400;">for</span> (<span style="color:rgb(230, 192, 123); font-weight:400;">int</span> i = <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>; i &lt; arr.length - <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>; i++) {
            <span style="color:rgb(230, 192, 123); font-weight:400;">int</span> min = i;
            <span style="color:rgb(198, 120, 221); font-weight:400;">for</span> (<span style="color:rgb(230, 192, 123); font-weight:400;">int</span> j = i + <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>; j &lt; arr.length; j++) {
                <span style="color:rgb(198, 120, 221); font-weight:400;">if</span> (arr[min] &gt; arr[j]) {
                    min = j;
                }
            }
            <span style="color:rgb(230, 192, 123); font-weight:400;">int</span> temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
        System.<span style="color:rgb(198, 120, 221); font-weight:400;">out</span>.println(Arrays.toString(arr));
    }</code></pre>`;

  let JavaScriptProg = `<pre>
 <code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;display:block;padding: .5em;"><span style="color:rgb(171, 178, 191); font-weight:400;"><span style="color:rgb(198, 120, 221); font-weight:400;">function</span> <span style="color:rgb(97, 174, 238); font-weight:400;">selectionSort</span><span style="color:rgb(171, 178, 191); font-weight:400;">(arr)</span></span> {
  <span style="color:rgb(198, 120, 221); font-weight:400;">for</span> (let i = <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>; i &lt; arr.length - <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>; i++) {
    let <span style="color:rgb(230, 192, 123); font-weight:400;">min</span> = i;
    <span style="color:rgb(198, 120, 221); font-weight:400;">for</span> (let j = i + <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>; j &lt; arr.length; j++) {
      <span style="color:rgb(198, 120, 221); font-weight:400;">if</span> (arr[<span style="color:rgb(230, 192, 123); font-weight:400;">min</span>] &gt; arr[j]) {
        <span style="color:rgb(230, 192, 123); font-weight:400;">min</span> = j;
      }
    }
    let temp = arr[<span style="color:rgb(230, 192, 123); font-weight:400;">min</span>];
    arr[<span style="color:rgb(230, 192, 123); font-weight:400;">min</span>] = arr[i];
    arr[i] = temp;
  }
  console.<span style="color:rgb(230, 192, 123); font-weight:400;">log</span>(arr);
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
