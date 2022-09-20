async function bubbleSort() {
  const delayTime = parseInt(speed.value) / 10;
  let elementArr = [...elements.getElementsByClassName("ele")];
  let heightArr = elementArr.map((ele) =>
    parseFloat(getComputedStyle(ele).height)
  );

  for (let i = 0; i < elementArr.length; i++) {
    for (let j = 0; j < elementArr.length - 1 - i; j++) {
      if (heightArr[j] > heightArr[j + 1]) {
        error(elementArr[j], elementArr[j + 1]);
        await delay(delayTime);
        elementArr[j].style.height = `${heightArr[j + 1]}px`;
        elementArr[j + 1].style.height = `${heightArr[j]}px`;

        let temp = heightArr[j];
        heightArr[j] = heightArr[j + 1];
        heightArr[j + 1] = temp;
      }
      await delay(delayTime);
      successful(elementArr[j], elementArr[j + 1]);
      await delay(delayTime);
      reset(elementArr[j], elementArr[j + 1]);
    }
    // #2C69D1 #0ABCF9
    elementArr[
      elementArr.length - 1 - i
    ].style.background = `linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)`;
  }
}

function descriptionBubbleSort() {
  javaButton.style.backgroundColor = `rgb(40, 44, 52)`;
  let desc = ` Bubble sort is a quadratic sorting algorithm that works by repeatedly
        swapping the adjacent elements if they are in the wrong order. <br />
        <br />
        As the name suggest (Bubble sort) like the Bubble which are generally
        lighter in weight goes up like that the element of lighter (less
        magnitude) goes to the start and the heavier ones (higher magnitude)
        goes to the end. <br />
        <br />
        Its a simple algorithm to implement but quite not efficient to implement
        for larger data set as its worst case and average case is quadratic in
        nature.`;
    let worst = `O(N<sup>2</sup>)`;
    let average = `O(N<sup>2</sup>)`;
    let best = `O(N)`;
    let space = `O(1)`;

  let JavaProg = `<pre>
 <code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;display:block;padding: .5em;"> <span style="color:rgb(171, 178, 191); font-weight:400;"><span style="color:rgb(198, 120, 221); font-weight:400;">public</span> <span style="color:rgb(198, 120, 221); font-weight:400;">static</span> <span style="color:rgb(198, 120, 221); font-weight:400;">void</span> <span style="color:rgb(97, 174, 238); font-weight:400;">bubbleSort</span>(<span style="color:rgb(171, 178, 191); font-weight:400;"><span style="color:rgb(230, 192, 123); font-weight:400;">int</span> arr[]</span>)</span> {
        <span style="color:rgb(198, 120, 221); font-weight:400;">for</span> (<span style="color:rgb(230, 192, 123); font-weight:400;">int</span> i = <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>; i &lt; arr.length; i++) {
            boolean flag = <span style="color:rgb(86, 182, 194); font-weight:400;">false</span>;
            <span style="color:rgb(198, 120, 221); font-weight:400;">for</span> (<span style="color:rgb(230, 192, 123); font-weight:400;">int</span> j = <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>; j &lt; arr.length - <span style="color:rgb(209, 154, 102); font-weight:400;">1</span> - i; j++) {
                <span style="color:rgb(198, 120, 221); font-weight:400;">if</span> (arr[j] &gt; arr[j + <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>]) {
                    <span style="color:rgb(230, 192, 123); font-weight:400;">int</span> temp = arr[j];
                    arr[j] = arr[j + <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>];
                    arr[j + <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>] = temp;
                    flag = <span style="color:rgb(86, 182, 194); font-weight:400;">true</span>;
                }
            }
            <span style="color:rgb(198, 120, 221); font-weight:400;">if</span> (!flag) {
                <span style="color:rgb(198, 120, 221); font-weight:400;">break</span>;
            }
        }
        System.<span style="color:rgb(198, 120, 221); font-weight:400;">out</span>.println(Arrays.toString(arr));
}</code></pre>`;

  let JavaScriptProg = `<pre>
 <code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;display:block;padding: .5em;"><span style="color:rgb(171, 178, 191); font-weight:400;"><span style="color:rgb(198, 120, 221); font-weight:400;">function</span> <span style="color:rgb(97, 174, 238); font-weight:400;">bubbleSort</span>(<span style="color:rgb(171, 178, 191); font-weight:400;">arr</span>) </span>{
  <span style="color:rgb(198, 120, 221); font-weight:400;">for</span> (<span style="color:rgb(198, 120, 221); font-weight:400;">let</span> i = <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>; i &lt; arr.length; i++) {
    <span style="color:rgb(198, 120, 221); font-weight:400;">let</span> flag = <span style="color:rgb(86, 182, 194); font-weight:400;">false</span>;
    <span style="color:rgb(198, 120, 221); font-weight:400;">for</span> (<span style="color:rgb(198, 120, 221); font-weight:400;">let</span> j = <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>; j &lt; arr.length - <span style="color:rgb(209, 154, 102); font-weight:400;">1</span> - i; j++) {
      <span style="color:rgb(198, 120, 221); font-weight:400;">if</span> (arr[j] &gt; arr[j + <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>]) {
        <span style="color:rgb(198, 120, 221); font-weight:400;">let</span> temp = arr[j];
        arr[j] = arr[j + <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>];
        arr[j + <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>] = temp;
        flag = <span style="color:rgb(86, 182, 194); font-weight:400;">true</span>;
      }
    }
    <span style="color:rgb(198, 120, 221); font-weight:400;">if</span> (!flag) {
      <span style="color:rgb(198, 120, 221); font-weight:400;">break</span>;
    }
 }
    <span style="color:rgb(230, 192, 123); font-weight:400;">console</span>.log(arr);
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
