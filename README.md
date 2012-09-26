# Disable Facebook

Disable Facebook Social Plugins for Faster Web &amp; Longer Battery Life

The original source code is forked from my previous project [Anti Want-Want](https://github.com/chitsaou/no-wang-wang).

## How to Use

I haven't packed it as an extension, nor pushed it to the Web Store. I have more plans on it.

For now, you just clone it to your local machine, go to Extensions page, turn on "Developer Mode", click "Load Unpacked Extension", and choose `$THIS_FOLDER/src`.

To temporarily turn it off, just uncheck "Enabled" box in Extensions page.

## Why This?

I'm a daily Web Developer, so the performance of Chrome's DOM Inspector is important to me.

The Facebook Social Plugins implements a bad way to dynamically expand its `<iframe>`, namely "Triggerring Layout All The Time", very frequently, about 10Hz.

Such behavior makes DOM Inspector refreshes the DOM tree **all the time**, wasting CPU times (i.e. battery) and making it hard to see actual things happening when diagnosting layout / custom scripts impacts with Timeline.

To see it yourself, simply add a Facebook Comments plugin, open Developer Tool, and you'll see your CPU / fan is roaring. Also, when you try to record timeline in Timeline panel, you'll see many, many, many continously, shortly-delayed `setTimeout` invocations, making it hard to diagnose actual impacts from your own codes.

That's annoying. So I make this to turn of all the Facebook Social Plugins when I want them shut up.

## Software License

(The MIT License)

Copyright (c) 2012 Yu-Cheng Chuang

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
