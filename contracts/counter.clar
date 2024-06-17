
;; title: counter
;; version:
;; summary:
;; description:

(define-map counters principal uint)

(define-read-only (get-count (who principal)) 
    (default-to u0  (map-get? counters who))
)

(define-public (count-up) 
    (begin 
        (map-set counters tx-sender (+ (get-count tx-sender) u1))
        (ok true)
     )
)