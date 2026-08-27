#!/usr/bin/env python3
"""
Genera public/claude/guia/inicio.md concatenando el conductor con los diez pasos,
el modo rescate y la tarjeta de estado.

Existe porque Claude solo puede descargar URLs que el usuario pegó en el chat. Una
URL escrita dentro de una página que Claude ya leyó NO queda habilitada para una
segunda descarga. Por eso el conductor tiene que ser autocontenido: una sola
descarga y adentro está todo.

Uso:  python3 build-inicio.py [--check]
Lee:  _conductor.md y los .md de la carpeta de la guía
Escribe: inicio.md
"""
import re, os, sys

AQUI = os.path.dirname(os.path.abspath(__file__))
GUIA = os.environ.get(
    'GUIA_DIR',
    os.path.join(AQUI, '..', '..', 'public', 'claude', 'guia'),
)

PASOS = [
    ('PASO 1',  '00-diagnostico.md'), ('PASO 2',  '01-entregable.md'),
    ('PASO 3',  '02-perfil.md'),      ('PASO 4',  '03-conectores.md'),
    ('PASO 5',  '04-proyecto.md'),    ('PASO 6',  '05-entrevista.md'),
    ('PASO 7',  '06-reporte.md'),     ('PASO 8',  '07-destino.md'),
    ('PASO 9',  '08-horario.md'),     ('PASO 10', '09-cierre.md'),
]
APOYO = [('MODO RESCATE', 'coach.md'), ('TARJETA DE ESTADO', 'estado.md')]
SIGUIENTE = {f: PASOS[i+1][0] for i, (_, f) in enumerate(PASOS[:-1])}

def limpiar(texto, archivo):
    # las URLs remotas se vuelven referencias internas
    texto = re.sub(r'Siguiente: https://joework\.co/claude/guia/[0-9a-z-]+\.md',
                   f'Siguiente: {SIGUIENTE.get(archivo, "el cierre")}, más abajo en este mismo archivo.', texto)
    texto = re.sub(r'Si algo falla dos veces o dicen "estoy trabado": https://joework\.co/claude/guia/coach\.md',
                   'Si algo falla dos veces o dicen "estoy trabado": ve a MODO RESCATE, al final de este archivo.', texto)
    texto = re.sub(r'[Dd]escarga https://joework\.co/claude/guia/estado\.md',
                   'Usa la sección TARJETA DE ESTADO de este archivo', texto)
    texto = re.sub(r'https://joework\.co/claude/guia/[0-9a-z-]+\.md', 'la sección correspondiente de este archivo', texto)
    # jerarquía: el H1 del archivo baja a H2, y sus H2 internos bajan a H3
    texto = re.sub(r'^## ', '### ', texto, flags=re.M)
    texto = re.sub(r'^# ',  '## ',  texto, count=1, flags=re.M)
    return texto.strip()

def leer(nombre):
    with open(os.path.join(GUIA, nombre), encoding='utf-8') as fh:
        return fh.read()

partes = [open(os.path.join(AQUI, '_conductor.md'), encoding='utf-8').read().strip()]
partes.append("\n\n---\n\n# CONTENIDO DE LOS PASOS\n\n"
              "Desde aquí hasta el final está el detalle de cada paso. Lee solo la sección\n"
              "del paso en el que están. No adelantes.\n")

for etiqueta, archivo in PASOS + APOYO:
    partes.append(f"\n\n---\n\n<!-- {etiqueta} -->\n\n" + limpiar(leer(archivo), archivo))

salida = "\n".join(partes).rstrip() + "\n"
destino = os.path.join(GUIA, 'inicio.md')

if '--check' in sys.argv:
    with open(destino, encoding='utf-8') as fh:
        publicado = fh.read()
    if publicado != salida:
        print('inicio.md esta desactualizado; ejecuta npm run build:claude-guide', file=sys.stderr)
        sys.exit(1)
else:
    with open(destino, 'w', encoding='utf-8') as fh:
        fh.write(salida)

accion = 'verificado' if '--check' in sys.argv else 'generado'
print(f"inicio.md {accion}: {len(salida)} caracteres, ~{len(salida)//4} tokens aprox")
for etiqueta, _ in PASOS + APOYO:
    assert f"<!-- {etiqueta} -->" in salida, f"falta {etiqueta}"
assert 'joework.co/claude/guia/0' not in salida, "quedaron URLs de paso sin limpiar"
print("verificacion: las 12 secciones estan presentes y no quedan URLs encadenadas")
