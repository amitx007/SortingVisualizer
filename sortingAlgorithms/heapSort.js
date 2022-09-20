async function heapSort() {
  let delayTime = parseInt(speed.value) / 10;
  let elementArr = [...elements.getElementsByClassName("ele")];
  let heightArr = elementArr.map((ele) =>
    parseFloat(getComputedStyle(ele).height)
  );
  hs(elementArr, heightArr, delayTime);
}

async function hs(elearr, heiArr, delayTime) {
  let N = elearr.length;
  for (let i = parseInt(N / 2); i >= 0; i--) {
    await heapify(elearr, heiArr, N, i, delayTime);
  }
  for (let i = N - 1; i > 0; i--) {
    error(elearr[i], elearr[0]);
    await delay(delayTime);
    elearr[i].style.height = `${heiArr[0]}px`;
    elearr[0].style.height = `${heiArr[i]}px`;
    successful(elearr[i], elearr[0]);
    await delay(delayTime);
    reset(elearr[i], elearr[0]);
    let temp = heiArr[0];
    heiArr[0] = heiArr[i];
    heiArr[i] = temp;
    elearr[
      i
    ].style.background = `linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)`;
    await heapify(elearr, heiArr, i, 0, delayTime);
  }
  elearr[0].style.background = `linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)`;
}

async function heapify(elearr, heiArr, N, i, delayTime) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  if (left < N && heiArr[left] > heiArr[largest]) {
    largest = left;
  }
  if (right < N && heiArr[right] > heiArr[largest]) {
    largest = right;
  }
  if (largest != i) {
    error(elearr[i], elearr[largest]);
    await delay(delayTime);
    elearr[i].style.height = `${heiArr[largest]}px`;
    elearr[largest].style.height = `${heiArr[i]}px`;
    await delay(delayTime);
    successful(elearr[i], elearr[largest]);
    await delay(delayTime);
    reset(elearr[i], elearr[largest]);
    let temp = heiArr[i];
    heiArr[i] = heiArr[largest];
    heiArr[largest] = temp;
    heapify(elearr, heiArr, N, largest);
  }
}

function descriptionHeapSort() {
  javaButton.style.backgroundColor = `rgb(40, 44, 52)`;

  let desc = `Heap sort is a comparison-based sorting technique based on Binary Heap data structure. It is similar to the selection sort where we first find the minimum element and place the minimum element at the beginning. Repeat the same process for the remaining elements. <br><br><b>Advantages of heapsort:</b> <br/><br/>
Efficiency –  The time required to perform Heap sort increases logarithmically while other algorithms may grow exponentially slower as the number of items to sort increases. This sorting algorithm is very efficient. <br><br>
Memory Usage – Memory usage is minimal because apart from what is necessary to hold the initial list of items to be sorted, it needs no additional memory space to work.<br><br>
Simplicity –  It is simpler to understand than other equally efficient sorting algorithms because it does not use advanced computer science concepts such as recursion`;

  let worst = `O(NLOGN)`;
  let average = `O(NLOGN)`;
  let best = `O(NLOGN)`;
  let space = `O(1)`;

  let JavaProg = `<pre>
 <code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;display:block;padding: .5em;"> <span style="color:rgb(171, 178, 191); font-weight:400;"><span style="color:rgb(198, 120, 221); font-weight:400;">public</span> <span style="color:rgb(198, 120, 221); font-weight:400;">static</span> <span style="color:rgb(198, 120, 221); font-weight:400;">void</span> <span style="color:rgb(97, 174, 238); font-weight:400;">heapsort</span>(<span style="color:rgb(171, 178, 191); font-weight:400;"><span style="color:rgb(230, 192, 123); font-weight:400;">int</span> arr[]</span>)</span> {
        <span style="color:rgb(230, 192, 123); font-weight:400;">int</span> N = arr.length;
        <span style="color:rgb(198, 120, 221); font-weight:400;">for</span> (<span style="color:rgb(230, 192, 123); font-weight:400;">int</span> i = N / <span style="color:rgb(209, 154, 102); font-weight:400;">2</span> - <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>; i &gt;= <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>; i--)
            heapify(arr, N, i);
        <span style="color:rgb(198, 120, 221); font-weight:400;">for</span> (<span style="color:rgb(230, 192, 123); font-weight:400;">int</span> i = N - <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>; i &gt; <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>; i--) {
            <span style="color:rgb(230, 192, 123); font-weight:400;">int</span> temp = arr[<span style="color:rgb(209, 154, 102); font-weight:400;">0</span>];
            arr[<span style="color:rgb(209, 154, 102); font-weight:400;">0</span>] = arr[i];
            arr[i] = temp;
            heapify(arr, i, <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>);
        }
        System.<span style="color:rgb(198, 120, 221); font-weight:400;">out</span>.println(Arrays.toString(arr));
    }
  <span style="color:rgb(171, 178, 191); font-weight:400;"><span style="color:rgb(198, 120, 221); font-weight:400;">public</span> <span style="color:rgb(198, 120, 221); font-weight:400;">static</span> <span style="color:rgb(198, 120, 221); font-weight:400;">void</span> <span style="color:rgb(97, 174, 238); font-weight:400;">heapify</span>(<span style="color:rgb(171, 178, 191); font-weight:400;"><span style="color:rgb(230, 192, 123); font-weight:400;">int</span> arr[], <span style="color:rgb(230, 192, 123); font-weight:400;">int</span> N, <span style="color:rgb(230, 192, 123); font-weight:400;">int</span> i</span>)</span> {
        <span style="color:rgb(230, 192, 123); font-weight:400;">int</span> largest = i; 
        <span style="color:rgb(230, 192, 123); font-weight:400;">int</span> l = <span style="color:rgb(209, 154, 102); font-weight:400;">2</span> * i + <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>; 
        <span style="color:rgb(230, 192, 123); font-weight:400;">int</span> r = <span style="color:rgb(209, 154, 102); font-weight:400;">2</span> * i + <span style="color:rgb(209, 154, 102); font-weight:400;">2</span>;

        <span style="color:rgb(198, 120, 221); font-weight:400;">if</span> (l &lt; N &amp;&amp; arr[l] &gt; arr[largest])
            largest = l;
        <span style="color:rgb(198, 120, 221); font-weight:400;">if</span> (r &lt; N &amp;&amp; arr[r] &gt; arr[largest])
            largest = r;
        <span style="color:rgb(198, 120, 221); font-weight:400;">if</span> (largest != i) {
            <span style="color:rgb(230, 192, 123); font-weight:400;">int</span> swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;
            heapify(arr, N, largest);
        }
    }</code></pre>`;

  let JavaScriptProg = `<pre>
 <code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;display:block;padding: .5em;"><span style="color:rgb(171, 178, 191); font-weight:400;"><span style="color:rgb(198, 120, 221); font-weight:400;">function</span> <span style="color:rgb(97, 174, 238); font-weight:400;">heapSort</span>(<span style="color:rgb(171, 178, 191); font-weight:400;">arr</span>) </span>{
  <span style="color:rgb(198, 120, 221); font-weight:400;">let</span> N = arr.length;
  <span style="color:rgb(198, 120, 221); font-weight:400;">for</span> (<span style="color:rgb(198, 120, 221); font-weight:400;">let</span> i = N / <span style="color:rgb(209, 154, 102); font-weight:400;">2</span> - <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>; i &gt;= <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>; i--) heapify(arr, N, i);
  <span style="color:rgb(198, 120, 221); font-weight:400;">for</span> (<span style="color:rgb(198, 120, 221); font-weight:400;">let</span> i = N - <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>; i &gt; <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>; i--) {
    <span style="color:rgb(198, 120, 221); font-weight:400;">let</span> temp = arr[<span style="color:rgb(209, 154, 102); font-weight:400;">0</span>];
    arr[<span style="color:rgb(209, 154, 102); font-weight:400;">0</span>] = arr[i];
    arr[i] = temp;
    heapify(arr, i, <span style="color:rgb(209, 154, 102); font-weight:400;">0</span>);
  }
  <span style="color:rgb(230, 192, 123); font-weight:400;">console</span>.log(arr);
}
<span style="color:rgb(171, 178, 191); font-weight:400;"><span style="color:rgb(198, 120, 221); font-weight:400;">function</span> <span style="color:rgb(97, 174, 238); font-weight:400;">heapify</span>(<span style="color:rgb(171, 178, 191); font-weight:400;">arr, N, i</span>) </span>{
  <span style="color:rgb(198, 120, 221); font-weight:400;">let</span> largest = i;
  <span style="color:rgb(198, 120, 221); font-weight:400;">let</span> l = <span style="color:rgb(209, 154, 102); font-weight:400;">2</span> * i + <span style="color:rgb(209, 154, 102); font-weight:400;">1</span>;
  <span style="color:rgb(198, 120, 221); font-weight:400;">let</span> = <span style="color:rgb(209, 154, 102); font-weight:400;">2</span> * i + <span style="color:rgb(209, 154, 102); font-weight:400;">2</span>;

  <span style="color:rgb(198, 120, 221); font-weight:400;">if</span> (l &lt; N &amp;&amp; arr[l] &gt; arr[largest]) largest = l;
  <span style="color:rgb(198, 120, 221); font-weight:400;">if</span> (r &lt; N &amp;&amp; arr[r] &gt; arr[largest]) largest = r;
  <span style="color:rgb(198, 120, 221); font-weight:400;">if</span> (largest != i) {
    <span style="color:rgb(198, 120, 221); font-weight:400;">let</span> swap = arr[i];
    arr[i] = arr[largest];
    arr[largest] = swap;
    heapify(arr, N, largest);
  }
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
