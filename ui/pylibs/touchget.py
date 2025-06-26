from machine import Pin
import time

pIn4=Pin(4, Pin.IN)

def touchget(threshold):
    dif_time = 0
    Pin(1, Pin.OUT).on()
    st_time = time.ticks_us()

    while (pIn4.value()) != True:
        dif_time = (time.ticks_us()) - st_time
    Pin(1, Pin.OUT).off()
    if dif_time > threshold:
        res = True
    else:
        res = False
    return res
